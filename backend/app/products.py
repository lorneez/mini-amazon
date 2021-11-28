from flask import Flask, request, Blueprint, jsonify
from backend.app.models.product_review import PReview
from backend.app.models.product import Product
import json


# Configure application
products = Blueprint('products',__name__)

@products.route("/api/all_products/", methods=["GET"])
def all_products():
    products = Product.get_all()
    return json.dumps([item.__dict__ for item in products])

@products.route("/api/products_category/", methods=["GET"])
def all_products_category():
    products = Product.get_category(request.args['category'])
    return json.dumps([item.__dict__ for item in products])

@products.route("/api/products_seller/", methods=["GET"])
def all_products_seller():
    products = Product.get_by_seller(request.args['seller_id'])
    return json.dumps([item.__dict__ for item in products])

@products.route("/api/all_product_reviews/", methods=["GET"])
def all_product_reviews():
    reviews = PReview.get_all_for_product(request.args['product_id'])
    return json.dumps([r.__dict__ for r in reviews], default=str)

@products.route("/api/update_product_review_text/", methods=["POST"])
def edit_product_review_text():
    review = PReview.update_text(request.args['user_id'], request.args['product_id'], request.args['new_text'])
    if review is None:
        return jsonify(update_status=False)
    return json.dumps(review.__dict__, default=str)

@products.route("/api/add_product_review/", methods=["POST"])
def add_product_review():
    review = PReview.add_product_review(request.args['user_id'], request.args['product_id'], request.args['review_text'])
    if review is None:
        return jsonify(update_status=False)
    return json.dumps(review.__dict__, default=str)


