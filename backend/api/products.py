from models.product import Product
from flask import request

@app.route("/api/all_products", methods=["GET"])
def all_products():
    return Product.get_all()

@app.route("/api/products_category", methods=["GET"])
def all_products_category():
    incoming = request.get_json()
    return Product.get_category(incoming['category'])


