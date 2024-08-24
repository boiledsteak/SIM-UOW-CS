import subprocess
import re

interface = input("Enter interface name> ")
#subprocess.call("ifconfig "+interface, shell=True)
#subprocess.call(["ifconfig", interface])
ifconfig_result= subprocess.check_output(["ifconfig", interface], text=True)

rex = re.compile("\w\w:\w\w:\w\w:\w\w:\w\w:\w\w")
mac = rex.search(ifconfig_result)


print(mac.group())
