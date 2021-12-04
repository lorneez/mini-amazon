from flask import current_app as app
from backend.app.models.product import Product
from backend.app.models.cart import Cart

class SavedProduct:
    def __init__(self, stime, uid, pid, pname, pseller, pprice, pquant, pstat, pcat, pimage):
        self.saved_time = stime
        self.user_id = uid
        self.product_id = pid
        self.product_name = pname
        self.product_seller = pseller
        self.product_price = pprice
        self.product_quantity = pquant
        self.product_staus = pstat
        self.product_category = pcat
        self.product_image = pimage  

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
SELECT s.time_stamp, s.user_id, s.product_id, p.name, p.selled_id, p.price, p.available_quantity, p.inventory_status, p.category, p.image_id
FROM Products AS p
INNER JOIN SavedItem AS s
ON s.product_id = p.id
WHERE s.user_id = :uid
ORDER BY s.time_stamp DESC
''', uid=uid)
        return [SavedProduct(*row) for row in rows]

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
            SET time_stamp = current_timestamp AT TIME ZONE 'UTC'
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
INSERT INTO SavedItem(user_id, product_id)
VALUES(:uid, :pid)
RETURNING :pid
""", uid=uid, pid=pid)
            pid = rows[0][0]
            return Product.get(pid)
        except Exception:
            return None

    @staticmethod
    def remove_product(uid, pid):
        if Saved.product_exists(uid, pid):
            try:
                rows = app.db.execute("""
                DELETE FROM SavedItem
                WHERE user_id=:uid
                AND product_id=:pid
                """, uid=uid, pid=pid)
            except Exception:
                return None

    