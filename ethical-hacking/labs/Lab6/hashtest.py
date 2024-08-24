import hashlib
hashsha1 = hashlib.sha1(b'abcdef').hexdigest()
print("sha1: " + hashsha1)
hashmd5 = hashlib.md5(b'bffhup').hexdigest()
print("md5: " + hashmd5)

labwordlist = open("q5-wordlist", "r")
hashlist = open("q5-hashlist", "w")

for i in labwordlist:
    i = i.rstrip("\n")
    hashmd5 = hashlib.md5(i.encode('utf-8')).hexdigest()
    hashlist.write(hashmd5 + "\n")
    
