import numpy
import random
import datetime 

# id,user_id,product_id,quantity

if __name__ == "__main__":
    file = open("./backend/db/data/CartItem.csv", "w")
    file.write("id,user_id,product_id,quantity\n")

    # generate data for 50 carts each associated with a user
    for cart_id in range(50):
        id = cart_id
        user_id = cart_id
        for product_id in range(3):
            product_id = random.randint(0, 49)
            quantity = 2
            file.write("%d,%d,%d,%d\n" %(id,user_id,product_id,quantity))
    file.close()