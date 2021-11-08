from flask import current_app as app
from models.product import Product

class Saved:
    def __init__(self, id, user_id, product_id):
        self.id = id
        self.uid = user_id
        self.pid = product_id

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
SELECT *
FROM Products
WHERE id IN (
    SELECT product_id
    FROM SavedItem
    WHERE user_id = uid
)
ORDER BY time_stamp DESCENDING
''')
        return [Cart(*row) for row in rows]

    @staticmethod
    def product_exists(uid, pid):
        rows = app.db.execute('''
    SELECT *
    FROM SavedItem
    WHERE user_id = uid 
    AND product_id = pid
    ''')
        return len(rows)>0

    @staticmethod
    def add_product(uid, pid):
        try:
            rows = app.db.execute("""
INSERT INTO SavedItem(id, user_id, product_id)
VALUES(NEWID(), uid, pid)
RETURNING pid
""")
            pid = rows[0][0]
            return Product.get(pid)
        except Exception:
            return None

    