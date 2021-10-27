from flask import current_app as app

class Product:
    def __init__(self, id, name, price, available_quantity, inventory_status, category, image_id):
        self.id = id
        self.name = name
        self.price = price
        self.available_quantity = available_quantity
        self.inventory_status = inventory_status
        self.category = category
        self.image_id = image_id

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
    def get_all(available=True):
        rows = app.db.execute('''
SELECT id, name, price, available_quantity, inventory_status, category, image_id
FROM Products
WHERE available > 0
''',
                              available=available)
        return [Product(*row) for row in rows]
