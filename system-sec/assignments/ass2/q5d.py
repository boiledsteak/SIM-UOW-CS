import pandas as pd
import matplotlib.pyplot as plt

# Initial conditions
i = 2  # Initial spread rate for W
N_x = 63  # Number of computers initially infected by X
N_w = 1  # Number of computers initially infected by W

# List to store the results
results = [{"Hour": 6.5, "X Infected Computers": N_x, "W Infected Computers": N_w}]

# Compute the values for subsequent hours
current_time = 6.5  # Starting half hour

# Continue evolution until 9 hours (t = 9)
while current_time < 9:
    # Evolve X by doubling each half hour
    N_x *= 2
    current_time += 0.5
    results.append({"Hour": current_time, "X Infected Computers": N_x, "W Infected Computers": N_w})
    # Evolve W and decrement X
    N_x -= i
    i *= 3
    N_w *= 3
    if N_x < 0:
        N_x = 0
    current_time += 0.5
    results.append({"Hour": current_time, "X Infected Computers": N_x, "W Infected Computers": N_w})

# Adjusted loop for X starting from t = 9 to spread to three more computers each hour
while current_time < 24:
    N_x += 3  # X infects 3 more computers each hour
    N_w *= 3  # Assuming W continues to triple each hour
    current_time += 1  # Increment by one hour
    if N_x < 0:
        N_x = 0
    results.append({"Hour": current_time, "X Infected Computers": N_x, "W Infected Computers": N_w})

# Create a DataFrame to display the results in a table
df = pd.DataFrame(results)

# Plotting
plt.figure(figsize=(14, 7))
plt.bar(df['Hour'] - 0.15, df['X Infected Computers'], width=0.3, label='Worm X')
plt.bar(df['Hour'] + 0.15, df['W Infected Computers'], width=0.3, label='Counter-Worm W')
plt.xlabel('Hour')
plt.ylabel('Number of Infected Computers')
plt.title('Infection Spread Over Time')
plt.legend()
plt.grid(True)
plt.xticks(df['Hour'])
plt.yscale('log')
plt.ylim(1, max(df['W Infected Computers']) * 10)
plt.show()

# Print tables in Markdown format
print("### Table for Worm X")
print(df[['Hour', 'X Infected Computers']].to_markdown())
print("\n### Table for Counter-Worm W")
print(df[['Hour', 'W Infected Computers']].to_markdown())
