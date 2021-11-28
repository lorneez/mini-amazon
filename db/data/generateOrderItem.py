import numpy
import random
import datetime 

# ID,uid,productId,quantity,final_price,time_stamp,fulfillment_status

if __name__ == "__main__":
    file = open("./db/data/OrderItem.csv", "w")
    # file.write("id,user_id,product_id,quantity,final_price,time_stamp,fulfillment_status\n")

    # generate data for 50 orders
    for uid in range(10):
        # needs to be compatible with user data
        user_id = uid
        for order_id in range(100):
            id = order_id
            # time stamp of order placed 
            time_stamp = "2020-"+str(random.randint(9,12))+"-"+str(random.randint(1,29))+" 10:30:30+02"
            # fulfillment status is true half of the time 
            fulfillment_status = order_id % 2 == 0
            # each order can contain multiple products (2)
            pid = []
            for product_id in range(40):
                product_id = random.randint(0, 49)
                while product_id in pid:
                    product_id = random.randint(0, 49)
                pid.append(product_id)    
                quantity = random.randint(1,5)
                final_price = 10 * quantity
                file.write("%d,%d,%d,%d,%d,%s,%s\n" %(id, user_id, product_id, quantity, final_price, time_stamp, fulfillment_status))

    file.close()