import random

def generateOTP() : 
    digits = "0123456789"
    OTP = "" 

    for i in range(6) : 
        OTP += digits[random.randint(0, 9)] 

    return OTP 

otps = []
if __name__ == "__main__" : 

    for i in range(1024) : 
        otps.append(generateOTP())
    print(otps)