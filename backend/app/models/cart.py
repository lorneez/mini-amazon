from flask import current_app as app
from backend.app.models.product import Product

class Cart:
    def __init__(self, id, user_id, product_id, quantity):
        self.id = id
        self.uid = user_id
        self.pid = product_id
        self.quantity = quantity

    @staticmethod
    def get(id):
        rows = app.db.execute('''
SELECT id, name, price, available_quantity, inventory_status, category, image_id
FROM Products
WHERE id = :id
''',
                              id=id)
        return Product(*(rows[0])) if rows is not None else None

    @staticmethod
    def get_all_user(uid):
        rows = app.db.execute('''
SELECT *
FROM Products
WHERE id IN (
    SELECT product_id
    FROM CartItem
    WHERE user_id = :uid
)
''', uid=uid)
        return [Cart(*row) for row in rows]

    @staticmethod
    def cart_item_exists(uid, pid):
        rows = app.db.execute('''
    SELECT *
    FROM CartItem
    WHERE user_id = :uid 
    AND product_id = :pid
    ''', uid=uid, pid=pid)
        return len(rows)>0

    @staticmethod
    def update_quantity(uid, pid, quant):
        try:
            rows = app.db.execute('''
            UPDATE CartItem
            SET quantity = quantity+:quant
            WHERE user_id = :uid 
            AND product_id = :pid
            RETURNING :pid
            ''', uid=uid, pid=pid, quant=quant)
            pid = rows[0][0]
            return Product.get(pid)
        except Exception:
            return None

    @staticmethod
    def add_product(uid, pid, quant):
        if cart_item_exists(uid, pid):
            return update_quantity(uid, pid, quant)
        else:
            try:
                rows = app.db.execute("""
    INSERT INTO CartItem(id, user_id, product_id, quantity)
    VALUES(NEWID(), :uid, :pid, :quant)
    RETURNING pid
    """, uid=uid, pid=pid, quant=quant)
                pid = rows[0][0]
                return Product.get(pid)
            except Exception:
                return None

    @staticmethod
    def remove_product(uid, pid):
        if cart_item_exists(uid, pid):
            try:
                rows = app.db.execute("""
                DELETE FROM CartItem
                WHERE uid=:uid
                AND pid=:pid
                """, uid=uid, pid=pid)
            except Exception:
                return None
