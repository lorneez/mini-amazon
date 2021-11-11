from flask import current_app as app

class Product:
    def __init__(self, id, name, seller_id, price, available_quantity, inventory_status, category, image_id):
        self.id = id
        self.name = name
        self.seller = seller_id
        self.price = price
        self.available_quantity = available_quantity
        self.inventory_status = inventory_status
        self.category = category
        self.image_id = image_id

    @staticmethod
    def get(id):
        rows = app.db.execute('''
SELECT *
FROM Products
WHERE id = :id
''',
                              id=id)
        return Product(*(rows[0])) if rows is not None else None

    @staticmethod
    def get_all(available=True):
        rows = app.db.execute('''
SELECT *
FROM Products
WHERE available_quantity > 0
''')
        return [Product(*row) for row in rows]

    @staticmethod
    def get_by_seller(seller_id):
        rows = app.db.execute('''
SELECT *
FROM Products
WHERE seller_id = :seller_id
''', seller_id = seller_id)
        return [Product(*row) for row in rows]

    @staticmethod
    def get_category(category):
        rows = app.db.execute('''
SELECT *
FROM Products
WHERE category = :category
''', category=category)
        return [Product(*row) for row in rows]
