from flask import current_app as app

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
    WHERE user_id = uid
)
''')
        return [Cart(*row) for row in rows]