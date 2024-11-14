import pyotp
import time
import argparse
import base64

def generate_otp(secret):
    # Create a TOTP instance with a 15-second interval
    totp = pyotp.TOTP(secret, interval=15)
    return totp.now()

# Convert parameters to a valid base32 secret
def generate_base32_secret(param1, param2):
    # Combine parameters
    combined = f"{param1}{param2}".encode('utf-8')
    # Convert to base32
    base32_secret = base64.b32encode(combined).decode('utf-8')
    return base32_secret

if __name__ == "__main__":
    # Take in arg params
    parser = argparse.ArgumentParser()
    parser.add_argument('param1', type=str, help='The first parameter')
    parser.add_argument('param2', type=str, help='The second parameter')
    args = parser.parse_args()

    param1 = args.param1
    param2 = args.param2

    # Convert parameters to a base32 secret
    secret_a = generate_base32_secret(param1, param2)

    previous_otp = None  # Variable to hold the last printed OTP

    while True:
        otp = generate_otp(secret_a)
        # Print the OTP only if it is different from the previous one
        if otp != previous_otp:
            print(f"OTP from a.py: {otp}")
            previous_otp = otp  # Update the previous OTP

        
