from flask import Flask, request, Blueprint, jsonify
from backend.app.models.product_review import PReview
from backend.app.models.product import Product
from backend.app.models.user import User
from backend.app.models.cart import Cart
from backend.app.models.order import Order
import json


# Configure application
products = Blueprint('products',__name__)

@products.route("/api/all_products/", methods=["GET"])
def all_products():
    products = Product.get_all()
    return json.dumps([item.__dict__ for item in products])

@products.route("/api/product_by_id/", methods=["GET"])
def single_product():
    products = Product.get(request.args['id'])
    if products is None:
        return jsonify(status=False)
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
    return jsonify(add_status=True)

@products.route("/api/product_price_update/", methods=["POST"])
def change_product_cost():
    product_info = Product.change_price(request.args['id'], request.args['price_change'])
    if product_info is None:
        return jsonify(change_price_status=False)
    return jsonify(change_price_status=True)

@products.route("/api/product_status_update/", methods=["POST"])
def change_product_status():
    product_info = Product.change_status(request.args['id'], request.args['status'])
    if product_info is None:
        return jsonify(change_status=False)
    return jsonify(change_status=True)

@products.route("/api/remove_product/", methods=["POST"])
def remove_product():
    product_info = Product.remove_product(request.args['id'])
    if product_info is None:
        return jsonify(remove_status=False)
    return jsonify(remove_status=True)

@products.route("/api/update_product_quantity/", methods=["POST"])
def update_product_quantity():
    product_info = Product.change_quantity(request.args['id'], request.args['quantity_change'])
    if product_info is None:
        return jsonify(update_status=False)
    return jsonify(update_status=True)

@products.route("/api/all_product_reviews/", methods=["GET"])
def all_product_reviews():
    reviews = PReview.get_all_for_product(request.args['product_id'])
    all_info = []
    for r in reviews:
        info = r.__dict__
        user = User.get(info['from_id'])
        info['from_name'] = user.name
        all_info.append(info)
    return json.dumps(all_info, default=str)

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

@products.route("/api/avg_product_review_stars/", methods=["GET"])
def avg_product_review_stars():
    average = PReview.calculate_average_star(request.args['product_id'])
    if average is None:
        return jsonify(status=False)
    average = "{:.2f}".format(average)
    return jsonify(average=average)

@products.route("/api/update_product_review_upvote/", methods=["POST"])
def edit_product_review_upvote():
    review = PReview.update_upvote(request.args['user_id'], request.args['product_id'], request.args['vote_difference'])
    if review is None:
        return jsonify(update_status=False)
    return json.dumps(review.__dict__, default=str)

@products.route("/api/update_product_review_downvote/", methods=["POST"])
def edit_product_review_downvote():
    review = PReview.update_downvote(request.args['user_id'], request.args['product_id'], request.args['vote_difference'])
    if review is None:
        return jsonify(update_status=False)
    return json.dumps(review.__dict__, default=str)

@products.route("/api/add_product_review/", methods=["POST"])
def add_product_review():
    review = PReview.add_product_review(request.args['user_id'], request.args['product_id'], request.args['review_text'], request.args['stars'])
    if review is None:
        return jsonify(update_status=False)
    return json.dumps(review.__dict__, default=str)

@products.route("/api/delete_product_review/", methods=["POST"])
def delete_product_review():
    review = PReview.remove_product_review(request.args['user_id'], request.args['product_id'])
    if review is None:
        return jsonify(update_status=False)
    return jsonify(update_status=True)

@products.route("/api/buy_product/", methods=["POST"])
def buy_product():
    pid = request.args["product_id"]
    buyer_id = request.args['user_id']
    quantity = int(request.args["quantity"])

    product = Product.get(pid)[0]
    cost = float(quantity) * product.price

    purchased = Product.change_quantity(pid, quantity*-1)
    
    if purchased is None:
        return jsonify(purchase_status=False)

    buyer_cost = cost*-1
    seller_profit = cost
    seller_id = product.seller

    buyer_balance = User.change_balance(buyer_id, buyer_cost)
    if buyer_balance is None:
        purchased = Product.change_quantity(pid, quantity)
        return jsonify(purchase_status=False)

    seller_balance = User.change_balance(seller_id, seller_profit)
    print(seller_balance)
    if seller_balance is None:
        purchased = Product.change_quantity(pid, quantity)
        buyer_undo = User.change_balance(buyer_id, seller_profit) 
        return jsonify(purchase_status=False)
    
    remove = Cart.remove_product(buyer_id, pid)
    added_order = Order.add_order(buyer_id, pid, quantity, int(cost), False)
    
    return jsonify(purchase_status=True)



