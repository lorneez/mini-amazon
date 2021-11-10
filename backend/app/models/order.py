from flask import current_app as app

class Order:
    def __init__(self, id, user_id, product_id, quantity, final_price, time_stamp, fulfillment_status):
        self.id = id
        self.uid = user_id
        self.pid = product_id
        self.quant = quantity
        self.fin_price = final_price
        self.time = time_stamp
        self.status = fulfillment_status

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
SELECT *
FROM OrderItem
INNER JOIN Products
ON Products.id = OrderItem.product_id
WHERE OrderItem.user_id = :uid
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

    @staticmethod
    def remove_product(uid, pid):
        if cart_item_exists(uid, pid):
            try:
                rows = app.db.execute("""
                DELETE FROM SavedItem
                WHERE user_id=:uid
                AND product_id=:pid
                """, uid=uid, pid=pid)
            except Exception:
                return None

    