import pyotp
import base64
import argparse
import os
import sys

PASSWORDS_FILE = "Passwords.txt"

# same as device.py
def generate_otp(secret):
    totp = pyotp.TOTP(secret, interval=15)
    return totp.now()

def generate_base32_secret(param1, param2):
    combined = f"{param1}{param2}".encode('utf-8')
    base32_secret = base64.b32encode(combined).decode('utf-8')
    return base32_secret

# pw file should store username and pw as: username, pw
def check_user(username, password):
    if not os.path.exists(PASSWORDS_FILE):
        print("Passwords.txt doesn't exist")
        sys.exit()
        return False
    with open(PASSWORDS_FILE, 'r') as file:
        for line in file:
            stored_username, stored_password = line.strip().split(',')
            if stored_username == username and stored_password == password:
                return True
    return False

def register_user(username, password):
    with open(PASSWORDS_FILE, 'a') as file:
        file.write(f"{username},{password}\n")
    print(f"User {username} registered successfully!")

def is_password_valid(password):
    # Check if password contains at least one digit
    return any(char.isdigit() for char in password)

if __name__ == "__main__":
    # take in arg params
    parser = argparse.ArgumentParser(description='OTP verification and user registration.')
    parser.add_argument('params', nargs='+', help='Username, password for verification or "new" for registration.')
    args = parser.parse_args()
    params = args.params

    if len(params) == 3:
        # "log in" with OTP
        username = params[0]
        password = params[1]
        user_input_otp = params[2]  # OTP provided as argument

        if check_user(username, password):
            print("Valid User!")
            # Compare the input OTP with the expected OTP
            secret_a = generate_base32_secret("yo", "bruv")  # pre-shared key with device.py
            expected_otp = generate_otp(secret_a)
            if user_input_otp == expected_otp:
                print("Valid OTP!")
            else:
                print("Invalid OTP.")
        else:
            print("Invalid username or password. Exiting.")

    elif len(params) == 2 and params[1] == "new":
        # User registration
        username = params[0]
        password1 = input("Enter your password: ")
        password2 = input("Confirm your password: ")

        if password1 != password2:
            print("Passwords do not match. Exiting.")
        elif not is_password_valid(password1):
            print("Password must contain at least one digit. Exiting.")
        else:
            register_user(username, password1)

    else:
        print("Invalid arguments. Use 'python3 connect.py username password otp' for verification or 'python3 connect.py username new' for registration.")
