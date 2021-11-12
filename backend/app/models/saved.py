from flask import current_app as app
from backend.app.models.product import Product
from backend.app.models.cart import Cart

class Saved:
    def __init__(self, id, user_id, product_id, time_stamp):
        self.id = id
        self.uid = user_id
        self.pid = product_id
        self.time = time_stamp

    @staticmethod
    def get(id):
        rows = app.db.execute('''
SELECT *
FROM SavedItem
WHERE id = :id
''',
                              id=id)
        return SavedItem(*(rows[0])) if rows is not None else None

    @staticmethod
    def get_all_user(uid):
        rows = app.db.execute('''
SELECT p.id, p.name, p.seller_id, p.price, p.available_quantity, p.inventory_status, p.category, p.image_id
FROM Products AS p
INNER JOIN SavedItem
ON SavedItem.product_id = p.id
WHERE SavedItem.user_id = :uid
ORDER BY time_stamp DESC
''', uid=uid)
        return [Product(*row) for row in rows]

    @staticmethod
    def product_exists(uid, pid):
        rows = app.db.execute('''
    SELECT *
    FROM SavedItem
    WHERE user_id = :uid 
    AND product_id = :pid
    ''', uid=uid, pid=pid)
        return len(rows)>0

    @staticmethod
    def update_time(uid, pid):
        try:
            rows = app.db.execute('''
            UPDATE SavedItem
            SET product_id = :pid
            WHERE user_id = :uid 
            AND product_id = :pid
            RETURNING :pid
            ''', uid=uid, pid=pid)
            pid = rows[0][0]
            return Product.get(pid)
        except Exception:
            return None

    @staticmethod
    def add_product(uid, pid):
        try:
            rows = app.db.execute("""
INSERT INTO SavedItem(id, user_id, product_id)
VALUES(NEWID(), :uid, :pid)
RETURNING :pid
""", uid=uid, pid=pid)
            pid = rows[0][0]
            return Product.get(pid)
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

    