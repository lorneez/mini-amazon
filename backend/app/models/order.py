from flask import current_app as app

class OrderProduct:
    def __init__(self, oid, otime, oquant, fulfillment, uid, pid, pname, pseller, pprice, pquant, pstat, pcat, pimage):
        self.order_id = oid
        self.order_time = otime
        self.order_quantity = oquant
        self.order_fulfill = fulfillment
        self.user_id = uid
        self.product_id = pid
        self.product_name = pname
        self.product_seller = pseller
        self.product_price = pprice
        self.product_quantity = pquant
        self.product_status = pstat
        self.product_category = pcat
        self.product_image = pimage  

class Order:
    def __init__(self, id, user_id, product_id, quantity, final_price, time_stamp, fulfillment_status):
        self.id = id
        self.user_id = user_id
        self.product_id = product_id
        self.quantity = quantity
        self.final_price = final_price
        self.time_stamp = time_stamp
        self.fulfillment_status = fulfillment_status

    @staticmethod
    def get(id, uid, pid):
        rows = app.db.execute('''
SELECT *
FROM OrderItem
WHERE id = :id
AND user_id = :uid
AND product_id = :pid
''',
                              id=id, uid=uid, pid=pid)
        return Order(*(rows[0])) if rows is not None else None

    @staticmethod
    def get_all_user(uid):
        rows = app.db.execute('''
SELECT o.id, o.time_stamp, o.quantity, o.fulfillment_status, o.user_id, o.product_id, p.name, p.seller_id, p.price, p.available_quantity, p.inventory_status, p.category, p.image_id
FROM OrderItem as o
INNER JOIN Products as p
ON p.id = o.product_id
WHERE o.user_id = :uid
''', uid=uid)
        return [OrderProduct(*row) for row in rows]

    @staticmethod
    def get_all_seller_products(uid):
        rows = app.db.execute('''
SELECT o.id, o.time_stamp, o.quantity, o.fulfillment_status, o.user_id, o.product_id, p.name, p.seller_id, p.price, p.available_quantity, p.inventory_status, p.category, p.image_id
FROM OrderItem as o
INNER JOIN Products as p
ON p.id = o.product_id
WHERE p.seller_id = :uid
''', uid=uid)
        return [OrderProduct(*row) for row in rows]

    @staticmethod
    def get_all_user_order(uid):
        rows = app.db.execute('''
    SELECT id
    FROM OrderItem
    WHERE user_id = :uid 
    ''', uid=uid)
        return rows

    @staticmethod
    def get_single_user_order(id, uid):
        rows = app.db.execute('''
    SELECT o.id, o.time_stamp, o.quantity, o.fulfillment_status, o.user_id, o.product_id, p.name, p.seller_id, p.price, p.available_quantity, p.inventory_status, p.category, p.image_id
    FROM OrderItem as o
    INNER JOIN Products as p
    ON p.id = o.product_id
    WHERE o.user_id = :uid 
    AND o.id = :id
    ''', uid=uid, id=id)
        return [OrderProduct(*row) for row in rows]

    @staticmethod
    def add_order(uid, pid, quantity, final_price, fulfillment_status):
        try:
            rows = app.db.execute("""
INSERT INTO OrderItem(user_id, product_id, quantity, final_price, fulfillment_status)
VALUES(:uid, :pid, :quantity, :final_price, :fulfillment_status)
RETURNING product_id
""", uid=uid, pid=pid, quantity=quantity, final_price=final_price, fulfillment_status=fulfillment_status)
            pid = rows[0][0]
            return pid
        except Exception:
            return None

    