import numpy
import random
import datetime 
from generateProductImages import getProductImage

# ID,name,category,price,available_quantity,inventory_status,image_id

if __name__ == "__main__":
    file = open("./db/data/Products.csv", "w")
    catMap = {0: "Books", 1: "Electronics", 2: "Clothing", 3: "Games", 4: "Groceries"}
    nameMap = {0: "Book Product", 1: "Electronics Product", 2: "Clothing Product", 3: "Game Product", 4: "Grocery Product"}

    

    # generate data for 50 products
    for product_id in range(50):
        id = product_id
        # seller_ids are even in Users.csv
        seller_id = product_id * 2
        price = 10
        available_quantity = 10
        inventory_status = True
        category_id = product_id % 5
        category = catMap[category_id]
        image_id = id // 5
        name = nameMap[category_id] + " " + str(image_id)
        image = getProductImage(category, image_id)
        file.write("%d,%s,%d,%d,%s,%s,%s,%s\n" %(id,name,seller_id,price,available_quantity,inventory_status,category,image))

    file.close()