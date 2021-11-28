from flask import current_app as app

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
        return OrderItem(*(rows[0])) if rows is not None else None

    @staticmethod
    def get_all_user(uid):
        rows = app.db.execute('''
SELECT o.id, o.user_id, o.product_id, o.quantity, o.final_price, o.time_stamp, o.fulfillment_status
FROM OrderItem as o
INNER JOIN Products
ON Products.id = o.product_id
WHERE o.user_id = :uid
''', uid=uid)
        return [Order(*row) for row in rows]

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
    SELECT *
    FROM OrderItem
    WHERE user_id = :uid 
    AND id = :id
    ''', uid=uid, id=id)
        return [Order(*row) for row in rows]

    @staticmethod
    def add_order(id, uid, pid, quantity, final_price, fulfillment_status):
        try:
            rows = app.db.execute("""
INSERT INTO OrderItem(id, user_id, product_id, quantity, final_price, fulfillment_status)
VALUES(:id, :uid, :pid, :quantity, :final_price, :fulfillment_status)
RETURNING :id, :uid, :pid
""", uid=uid, pid=pid)
            id, uid, pid = rows[0]
            return id, uid, pid
        except Exception:
            return None

    