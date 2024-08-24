import re

dictionary = open("birthday2.txt", "r")
extracted2file = open("extracted_pwds.txt","w")
regx = re.compile(r'082[57]')
passwords = filter(regx.search, dictionary)

for line in passwords:
    extracted2file.write(line)

dictionary.close()
extracted2file.close()
