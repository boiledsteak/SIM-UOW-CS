import subprocess

ip_addr = input("Enter IP_addr> ")
port_no = input("Enter port nubmer> ")

result= subprocess.run(["nmap", ip_addr, "-p", port_no], capture_output=True)


result2 = subprocess.run(['grep',port_no], capture_output=True, input=result.stdout)

print("=======================")
print("The results:")
print(result2.stdout.decode())
