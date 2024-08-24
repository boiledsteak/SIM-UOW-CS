import requests

def check_subdomain(url):
	try:
		return requests.get(url)
	except requests.exceptions.ConnectionError:
		pass 
			
subdomain_file=open("subdomains.txt", "r")
domain="uow.edu.au"

for line in subdomain_file:
	subdomain=line.strip()
	url= "https://"+subdomain+"."+domain 
	if check_subdomain(url):
		print(url)
