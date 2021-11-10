import numpy
import random
import datetime 

# id,user_id,product_id,time_stamp

if __name__ == "__main__":
    file = open("./backend/db/data/SavedItem.csv", "w")
    file.write("id,user_id,product_id,time_stamp\n")

    # generate data for 50 saved items
    for saved_id in range(50):
        id = saved_id
        user_id = saved_id
        product_id = saved_id
        # time stamp of product saved 
        time_stamp = "2020-11-10 10:30:30+02"
        file.write("%d,%d,%d,%s\n" %(id,user_id,product_id,time_stamp))

    file.close()