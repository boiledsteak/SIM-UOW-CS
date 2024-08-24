from scapy.all import *

ip='192.168.64.12'
icmp_pkt = IP(dst=ip)/ICMP()
if sr1(icmp_pkt, timeout = 10) != None:
	print('The destination is online')	
else:
	print('The destination is offline')	
