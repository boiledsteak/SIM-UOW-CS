import pyotp
import argparse
import base64

def generate_otp(secret):
    # Create a TOTP instance with a 15-second interval
    totp = pyotp.TOTP(secret, interval=15)
    return totp.now()

# Convert arg params to base32 because pyotp.TOTP() requires base32 as input
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
            print(f"Device: {otp}")
            previous_otp = otp  # Update the previous OTP

        

# final otp will not leak information of the pw and userame because it is hashed together with current time value
# attacker would need to know time value used when running this app, and the hashing algo used