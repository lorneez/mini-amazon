import numpy
import random


if __name__ == "__main__":
    file = open("Users.csv", "w")
    file.write("id,email,password,name,is_seller,balance,address\n")

    # generate data for 100 users
    for user_id in range(100):
        id = user_id 
        email = "email" + str(user_id) + "@email.com"
        password = "password" + str(user_id)
        name = "First" + str(user_id) + " " + "Last" + str(user_id)
        isSeller = user_id % 2 == 0
        balance = user_id * 10
        address = str(user_id) + "Address Street"
        file.write("%d,%s,%s,%s,%s,%d,%s\n" %(id, email, password, name, isSeller, balance, address))

    file.close()