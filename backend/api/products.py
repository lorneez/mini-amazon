from models.product import Product
from flask import Flask, request

# Configure application
app = Flask(__name__)

@app.route("/api/all_products", methods=["GET"])
def all_products():
    return Product.get_all()

@app.route("/api/products_category", methods=["GET"])
def all_products_category():
    return Product.get_category(request.args['category'])

