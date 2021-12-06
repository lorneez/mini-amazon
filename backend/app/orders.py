from backend.app.models.order import Order
from flask import Flask, request, jsonify, flash, Blueprint
import json 

# Configure application
orders = Blueprint('orders',__name__)

@orders.route("/api/all_buyer_orders/", methods=["GET"])
def all_orders_buyer():
    orders = Order.get_all_user(request.args["user_id"])
    return json.dumps([item.__dict__ for item in orders], default=str)

@orders.route("/api/all_seller_orders/", methods=["GET"])
def all_orders_seller_products():
    orders = Order.get_all_seller_products(request.args["seller_id"])
    return json.dumps([item.__dict__ for item in orders], default=str)

@orders.route("/api/single_user_order/", methods=["GET"])
def single_order():
    orders = Order.get_single_user_order(request.args['id'], request.args['user_id'])
    return json.dumps([item.__dict__ for item in orders], default=str)

@orders.route("/api/add_order_item/", methods=["POST"])
def add_order():
    updated_prod =Order.add_order(request.args['id'], request.args['user_id'], request.args['product_id'], request.args['quantity'], request.args['final_price'], request.args['fulfillment_status'])
    if updated_prod is None:
        flash('Could not add product to orders')
        return None
    return jsonify(product = request.args['product_id'])
