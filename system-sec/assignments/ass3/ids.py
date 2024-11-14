import matplotlib.pyplot as plt
import numpy as np
import sys
import os
import json

class Event:
    def __init__(self, event_type, min_val, max_val, weight, name, mean, sd):
        self.type = event_type
        self.min = min_val
        self.max = max_val
        self.weight = weight
        self.name = name
        self.mean = mean
        self.sd = sd

    def generate_data(self, size):
        data = np.random.normal(loc=self.mean, scale=self.sd, size=size)
        return np.clip(data, self.min, self.max).astype(int) if self.type == 'D' else data

def load_events(file_path):
    events = []
    try:
        with open(file_path, 'r') as file:
            num_events = int(file.readline().strip())
            for _ in range(num_events):
                line = file.readline().strip().rstrip(':')
                parts = line.split(':')
                event_name = parts[0]
                event_type, min_val, max_val, weight = parts[1], float(parts[2]), float(parts[3]), int(parts[4])
                events.append(Event(event_type, min_val, max_val, weight, event_name, 0, 0))  # Mean and SD set later
    except Exception as e:
        print(f"Failed to read events file: {e}")
        sys.exit(1)
    return events

def load_stats(file_path, events):
    mean_sd_dict = {}
    try:
        with open(file_path, 'r') as file:
            num_entries = int(file.readline().strip())
            for _ in range(num_entries):
                line = file.readline().strip().rstrip(':')
                event_name, mean_val, sd_val = line.split(':')
                mean_sd_dict[event_name] = (float(mean_val), float(sd_val))
    except Exception as e:
        print(f"Failed to read mean and SD file: {e}")
        sys.exit(1)
    
    # Update events with mean and SD
    for event in events:
        if event.name in mean_sd_dict:
            event.mean, event.sd = mean_sd_dict[event.name]

def print_loaded_data(events, num_days):
    print("Data loaded:")
    print(f"No. of days: {num_days}")
    for event in events:
        print(f"{event.name:<15} - Type: {event.type}, Range: {event.min}-{event.max}, Mean: {event.mean}, SD: {event.sd}")
    print("\n...Data generated liao!!\n")

def run_analysis(events, num_days, parent_dir, first_run_thresholds=None):
    hours = np.arange(1, 25)
    actual_means = {event.name: [] for event in events}
    actual_sds = {event.name: [] for event in events}
    daily_totals = {event.name: [0] * num_days for event in events}
    thresholds = {}
    total_counts = {event.name: 0 for event in events}

    for event in events:
        event_dir = os.path.join(parent_dir, event.name.replace(" ", "_"))
        os.makedirs(event_dir, exist_ok=True)

        for day in range(num_days):
            day_dir = os.path.join(event_dir, f"Day {day + 1}")
            os.makedirs(day_dir, exist_ok=True)
            means = event.generate_data(24)
            actual_mean = np.mean(means)
            actual_sd = np.std(means, ddof=1)
            actual_means[event.name].append(actual_mean)
            actual_sds[event.name].append(actual_sd)
            total = sum(means)
            daily_totals[event.name][day] = total
            total_counts[event.name] += total
            threshold = 2 * total * event.weight
            thresholds[event.name, day] = threshold

            log_path = os.path.join(day_dir, 'event_log.json')
            with open(log_path, 'a') as log_file:
                for hour, value in zip(hours, means):
                    log_entry = {
                        "event": event.name,
                        "message": f"Event occurred {int(value)} times",
                        "hour": int(hour),
                        "times": int(value)
                    }
                    log_file.write(json.dumps(log_entry) + '\n')

            fig, ax = plt.subplots(figsize=(14, 8))
            ax.bar(hours, means, color='skyblue', label='Event Stats')
            ax.axhline(event.mean, color='red', linestyle='dashed', linewidth=1, label=f'Mean ({event.mean})')
            ax.axhline(event.mean + event.sd, color='orange', linestyle='dashed', linewidth=1, label=f'Mean + SD ({event.sd})')
            ax.axhline(event.mean - event.sd, color='orange', linestyle='dashed', linewidth=1, label=f'Mean - SD ({event.sd})')
            ax.axhline(event.max, color='purple', linestyle='dashed', linewidth=1, label='Max')
            ax.set_xlabel('Hour of the Day')
            ax.set_ylabel('Values')
            ax.set_title(f'Generated Hourly Values for {event.name} (Day {day + 1})')
            ax.set_xticks(hours)
            ax.legend()
            plt.savefig(os.path.join(day_dir, 'plot.png'))
            plt.close(fig)

    # Write analysis results
    analysis_file_path = os.path.join(parent_dir, 'analysis_results.txt')
    with open(analysis_file_path, 'w') as analysis_file:
        analysis_file.write("ANALYSIS ENGINE: Mean + SD\n")
        analysis_file.write("-----------\n")
        for event in events:
            day_means = ' '.join(f"day {i+1} mean: {mean:.2f}" for i, mean in enumerate(actual_means[event.name]))
            day_sds = ' '.join(f"day {i+1} SD: {sd:.2f}" for i, sd in enumerate(actual_sds[event.name]))
            analysis_file.write(f"{event.name:<15} {{ {day_means}, expected mean: {event.mean} }}\n")
            analysis_file.write(f"{event.name:<15} {{ {day_sds}, expected SD: {event.sd} }}\n")

        analysis_file.write("\nTotals\n")
        analysis_file.write("-----------\n")
        for event in events:
            analysis_file.write(f"{event.name:<15} {{ {total_counts[event.name]} }}\n")

        analysis_file.write("\nAnomaly Detection\n")
        analysis_file.write("-----------\n")
        for event in events:
            for day in range(num_days):
                anomaly_score = event.weight * 2 * (daily_totals[event.name][day] - event.mean) / event.sd
                old_threshold = first_run_thresholds[event.name, day] if first_run_thresholds else thresholds[event.name, day]
                status = "Passed" if anomaly_score < old_threshold else "Failed"
                analysis_file.write(f"Day {day+1} {event.name:<15}: Anomaly Score: {anomaly_score:.2f}, Threshold: {old_threshold}, Status: {status}\n")

    return daily_totals, thresholds

def continuous_analysis(events_file, initial_stats, num_days):
    events = load_events(events_file)
    load_stats(initial_stats, events)
    print_loaded_data(events, num_days)

    _, first_run_thresholds = run_analysis(events, num_days, 'Event_Logs')

    run_count = 1
    while True:
        user_input = input("Enter the path to a new Stats.txt or press 'q' to quit: ")
        if user_input.lower() == 'q':
            print("Exiting program.")
            break
        if not os.path.exists(user_input):
            print("File not found. Please try again.")
            continue

        load_stats(user_input, events)
        print_loaded_data(events, num_days)  # Optional: Print data loaded info each time
        _, _ = run_analysis(events, num_days, f'Event_Logs{run_count + 1}', first_run_thresholds)
        run_count += 1

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python script.py events_file initial_stats_file days")
        sys.exit(1)

    num_days = int(sys.argv[3])
    initial_stats = sys.argv[2]
    events_file = sys.argv[1]

    continuous_analysis(events_file, initial_stats, num_days)
