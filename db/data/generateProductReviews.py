import numpy
import random
import datetime 

# from_id, product_id, time_stamp, review_text, numDownVotes, numUpVotes, numStars

if __name__ == "__main__":
    file = open("./db/data/ProductReview.csv", "w")
    # file.write("id,user_id,product_id,quantity,final_price,time_stamp,fulfillment_status\n")

    for pid in range(50):
        # needs to be compatible with user data
        product_id = pid
        uid = []
        for users in range(10):
            from_id = random.randint(0, 99)
            while from_id in uid:
                from_id = random.randint(0, 99)
            uid.append(from_id)
            # time stamp of order placed 
            time_stamp = "2020-11-10 10:30:30+02"
            down = 0
            up = 0
            stars = 0
            # fulfillment status is true half of the time 
            review_text = "GOOD :)"
            file.write("%d,%d,%s,%s,%d,%d,%d\n" %(from_id, product_id, time_stamp, review_text, down, up, stars))

    file.close()