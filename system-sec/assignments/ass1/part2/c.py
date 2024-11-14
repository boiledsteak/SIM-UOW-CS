import pyotp
import time

def generate_otp(secret):
    # Create a TOTP instance with a 15-second interval
    totp = pyotp.TOTP(secret, interval=15)
    return totp.now()

if __name__ == "__main__":
    # Replace this with a secure, random secret
    secret_b = 'JBSWY3DPEHPK3PXP'  # Example base32 secret

    otp = generate_otp(secret_b)
    print(f"OTP from b.py: {otp}")
        
