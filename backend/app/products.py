from models.product import Product, PReview
from flask import Flask, request

# Configure application
app = Flask(__name__)

@app.route("/api/all_products", methods=["GET"])
def all_products():
    products = Product.get_all()
    return json.dumps([item.__dict__ for item in products])

@app.route("/api/products_category", methods=["GET"])
def all_products_category():
    products = Product.get_category(request.args['category'])
    return json.dumps([item.__dict__ for item in products])

@app.route("/api/all_product_reviews", methods=["GET"])
def all_product_reviews():
    reviews = PReview.get_all_for_product(request.args['product_id'])
    return json.dumps([r.__dict__ for r in reviews])
