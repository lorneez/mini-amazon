from backend.app.models.order import Order
from flask import Flask, request, jsonify, flash, Blueprint

# Configure application
orders = Blueprint('orders',__name__)

@orders.route("/api/all_user_orders", methods=["GET"])
def all_orders_user():
    orders = Order.get_all_user(request.args["user_id"])
    return json.dumps([item.__dict__ for item in orders])

@orders.route("/api/single_user_order", methods=["GET"])
def single_order():
    orders = Order.get_all_user_order(request.args['id'], request.args['user_id'])
    return jsonify([item.__dict__ for item in orders])

@orders.route("/api/add_order_item", methods=["POST"])
def add_order():
    updated_prod =Order.add_order(request.args['id'], request.args['user_id'], request.args['product_id'], request.args['quantity'], request.args['final_price'], request.args['fulfillment_status'])
    if updated_prod is None:
        flash('Could not add product to orders')
        return None
    return jsonify(product = request.args['product_id'])
