import hashlib

flag = 0
# paste the tested hashed code in the double quotation
real_hash = ""
try:
    guessed_pass = open("guessed_pass.txt","r")
except:
    print("Guessed password file is not found")
    quit()    
for g_pass in guessed_pass:
    guessed_hash = hashlib.md5(g_pass.encode('utf-8').strip()).hexdigest()        
    if guessed_hash == real_hash:
        print("Congratulations!")
        print("The real password of md5 hash is found" + real_hash)
        print("It is "+ g_pass)
        # flag to 1 if password we found in the list
        flag = 1
        break
# if no match from the file the flag still 0
if flag == 0:
    # password is not in the list
    print("The plain password/passphrase is not found in the guessed password file")