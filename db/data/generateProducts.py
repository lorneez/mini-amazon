import numpy
import random
import datetime 

# ID,name,category,price,available_quantity,inventory_status,image_id

if __name__ == "__main__":
    file = open("./backend/db/data/Products.csv", "w")
    file.write("id,name,seller_id,price,available_quantity,inventory_status,category,image_id\n")

    # generate data for 50 products
    for product_id in range(50):
        id = product_id
        name = "product" + str(product_id)
        # seller_ids are even in Users.csv
        seller_id = product_id * 2
        price = 10
        available_quantity = 10
        inventory_status = True
        category = "category" + str(product_id % 5)
        image_id = product_id
        file.write("%d,%s,%d,%d,%s,%s,%s,%d\n" %(id,name,seller_id,price,available_quantity,inventory_status,category,image_id))

    file.close()