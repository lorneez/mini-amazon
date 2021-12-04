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

@products.route("/api/products_keyword/", methods=["GET"])
def all_products_keyword():
    products = Product.get_by_name(request.args['keyword'])
    return json.dumps([item.__dict__ for item in products])

@products.route("/api/products_seller/", methods=["GET"])
def all_products_seller():
    products = Product.get_by_seller(request.args['seller_id'])
    return json.dumps([item.__dict__ for item in products])

@products.route("/api/add_product/", methods=["POST"])
def add_product():
    product_info = Product.add_product(request.args['name'], request.args['seller_id'], request.args['price'], request.args['quantity'], request.args['inventory_status'], request.args['category'], request.args['image'])
    if product_info is None:
        return jsonify(add_status=False)
    return json.dumps(product_info.__dict__, default=str)

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

@products.route("/api/update_product_review_stars/", methods=["POST"])
def edit_product_review_stars():
    review = PReview.update_stars(request.args['user_id'], request.args['product_id'], request.args['stars'])
    if review is None:
        return jsonify(update_status=False)
    return json.dumps(review.__dict__, default=str)

@products.route("/api/add_product_review/", methods=["POST"])
def add_product_review():
    review = PReview.add_product_review(request.args['user_id'], request.args['product_id'], request.args['review_text'], request.args['stars'])
    if review is None:
        return jsonify(update_status=False)
    return json.dumps(review.__dict__, default=str)


