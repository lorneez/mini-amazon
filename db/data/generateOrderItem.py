import numpy
import random
import datetime 

# ID,uid,productId,quantity,final_price,time_stamp,fulfillment_status

if __name__ == "__main__":
    file = open("./db/data/OrderItem.csv", "w")
    # file.write("id,user_id,product_id,quantity,final_price,time_stamp,fulfillment_status\n")

    # generate data for 50 orders
    for order_id in range(50):
        id = order_id
        # needs to be compatible with user data
        user_id = order_id
        # time stamp of order placed 
        time_stamp = "2020-11-10 10:30:30+02"
        # fulfillment status is true half of the time 
        fulfillment_status = order_id % 2 == 0
        # each order can contain multiple products (2)
        for product_id in range(2):
            product_id = random.randint(0, 49)
            quantity = random.randint(1,5)
            final_price = 10 * quantity
        file.write("%d,%d,%d,%d,%d,%s,%s\n" %(id, user_id, product_id, quantity, final_price, time_stamp, fulfillment_status))

    file.close()