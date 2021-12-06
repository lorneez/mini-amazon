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
    def add_product(name, sid, price, quantity, inventory, category, image):
        try:
            rows = app.db.execute("""
INSERT INTO OrderItem(name, seller_id, price, available_quantity, inventory_status, category, image_id)
VALUES(:name, :sid, :price, :quantity, :inventory, :category, :image)
RETURNING :id, :sid, :name
""", name=name, sid=sid, price=price, quantity=quantity, inventory=inventory, category=category, image=image)
            id, sid, name = rows[0]
            return [id, sid, name]
        except Exception:
            return None

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

    @staticmethod
    def get_by_name(name):
        keyword = '%'+name.lower()+'%'
        rows = app.db.execute('''
SELECT *
FROM Products
WHERE LOWER(name) LIKE :keyword
''', keyword=keyword)
        return [Product(*row) for row in rows]

    @staticmethod
    def change_quantity(pid, quantity_change):
        try:
            rows = app.db.execute('''
                SELECT price
                FROM Products
                WHERE id=:pid
            ''', pid=pid)
            quantity = rows[0][0]
            if (quantity < quantity_change):
                return None
            else:
                rows = app.db.execute('''
        UPDATE Products
        SET available_quantity = available_quantity+:quantity_change
        WHERE id=:pid
        RETURNING :pid
        ''', quantity_change=quantity_change, pid=pid)
                return pid
        except Exception:
            return None

    @staticmethod
    def change_price(pid, price_change):
        try:
            rows = app.db.execute('''
    UPDATE Products
    SET price = price+:price_change
    WHERE id=:pid
    RETURNING :pid
    ''', price_change=price_change, pid=pid)
            return pid
        except Exception:
            return None

    @staticmethod
    def change_status(pid, status):
        try:
            rows = app.db.execute('''
    UPDATE Products
    SET inventory_status = :status
    WHERE id=:pid
    RETURNING :pid
    ''', status=status)
            return pid
        except Exception:
            return None

    @staticmethod
    def remove_product(pid):
        try:
            rows = app.db.execute('''
                DELETE FROM Products
                WHERE id=:pid
                RETURNING :pid
    ''', pid=pid)
            return pid
        except Exception as e:
            return None

