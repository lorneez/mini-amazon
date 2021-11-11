from flask import Flask, request, Blueprint
from backend.app.models.product_review import PReview
from backend.app.models.product import Product
import json


# Configure application
products = Blueprint('products',__name__)

@products.route("/api/all_products/", methods=["GET"])
def all_products():
    print("Successfully called!")
    products = Product.get_all()
    return json.dumps([item.__dict__ for item in products])

@products.route("/api/products_category", methods=["GET"])
def all_products_category():
    products = Product.get_category(request.args['category'])
    return json.dumps([item.__dict__ for item in products])

@products.route("/api/products_seller", methods=["GET"])
def all_products_seller():
    products = Product.get_by_seller(request.args['seller_id'])
    return json.dumps([item.__dict__ for item in products])

@products.route("/api/all_product_reviews", methods=["GET"])
def all_product_reviews():
    reviews = PReview.get_all_for_product(request.args['product_id'])
    return json.dumps([r.__dict__ for r in reviews])

