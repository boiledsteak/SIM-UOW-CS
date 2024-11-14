import pandas as pd
import matplotlib.pyplot as plt

# Ensure pandas is updated to use to_markdown()
# pd.__version__ should be '1.0' or higher

# Initial conditions
i = 2
N_x = 63
N_w = 1

# List to store the results
results = [{"Hour": 6.5, "X Infected Computers": N_x, "W Infected Computers": N_w}]

# Compute the values for subsequent hours
current_time = 6.5  # Starting half hour

while current_time < 24:
    # "1st" row
    N_x = N_x * 2
    current_time += 0.5
    results.append({"Hour": current_time, "X Infected Computers": N_x, "W Infected Computers": N_w})
    # "2nd" row
    N_x = N_x - i
    current_time += 0.5
    i = i * 3
    N_w = N_w * 3
    # No negative infections
    if N_x < 0:
        N_x = 0
    results.append({"Hour": current_time, "X Infected Computers": N_x, "W Infected Computers": N_w})

# Create a DataFrame to display the results in a table
counter_worm_df_from_65 = pd.DataFrame(results)

# Separate tables for X and W
table_x = counter_worm_df_from_65[['Hour', 'X Infected Computers']]
table_w = counter_worm_df_from_65[['Hour', 'W Infected Computers']]

# Plotting the data with adjustments
plt.figure(figsize=(14, 7))
plt.bar(counter_worm_df_from_65['Hour'] - 0.15, counter_worm_df_from_65['X Infected Computers'], width=0.3, label='Worm X')
plt.bar(counter_worm_df_from_65['Hour'] + 0.15, counter_worm_df_from_65['W Infected Computers'], width=0.3, label='Counter-Worm W')
plt.xlabel('Hour')
plt.ylabel('Number of Infected Computers')
plt.title('Infection Spread Over Time')
plt.legend()
plt.grid(True)
plt.xticks(counter_worm_df_from_65['Hour'])
plt.yscale('log')  # Setting logarithmic scale
plt.ylim(1, max(counter_worm_df_from_65['W Infected Computers']) * 10)  # Adjust y-axis limit
plt.show()

# Print tables in Markdown format
print("### Table for Worm X")
print(table_x.to_markdown())
print("\n### Table for Counter-Worm W")
print(table_w.to_markdown())
