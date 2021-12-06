from backend.app.models.cart import Cart
from backend.app.models.product import Product
from backend.app.models.user import User
from flask import Flask, request, jsonify, flash, Blueprint
import json

# Configure application
cart = Blueprint('cart',__name__)

@cart.route("/api_user_cart/", methods=["GET"])
def all_products():
    cart = Cart.get_all_user(request.args["user_id"])
    return json.dumps([item.__dict__ for item in cart])

@cart.route("/api/add_cart/", methods=["POST"])
def add_to_cart():
    '''
    '''
    added_prod = Cart.add_product(request.args['user_id'], request.args['product_id'], request.args['quantity'])
    if added_prod is None:
        flash('Could not add product to cart')
        return None
    return jsonify(product = request.args['product_id'])

@cart.route("/api/update_cart_quantity/", methods=["POST"])
def update_quantity():
    '''
    '''
    if not Cart.cart_item_exists(request.args['user_id'], request.args['product_id'], request.args['quantity']):
        flash('Product is not in cart')
        return None
    updated_prod = Cart.update_quantity(request.args['user_id'], request.args['product_id'], request.args['quantity'])
    if updated_prod is None:
        flash('Could not update product quantity in cart')
        return None
    return jsonify(product = request.args['product_id'])

@cart.route("/api/remove_cart_item/", methods=["POST"])
def remove_item():
    '''
    '''
    if not Cart.cart_item_exists(request.args['user_id'], request.args['product_id']):
        return None
    Cart.remove_product(request.args['user_id'], request.args['product_id'])
    return jsonify(product = request.args['product_id'])

@cart.route("/api/clear_user_cart/", methods=["POST"])
def clear_user_cart():
    user = Cart.remove_all_user_cart(request.args['user_id'])
    return jsonify(user_id = user)

@cart.route("/api/create_user_cart/", methods=["POST"])
def create_user_cart():
    body = request.get_json(force=True)
    user_id = body['user_id']
    all_products = body['cart_products']
    for p in all_products:
        added_prod = Cart.add_product(user_id, p['product_id'], p['quantity'])
        if added_prod is None:
            return jsonify(add_status=False)
    return jsonify(user_id = user_id)

@cart.route("/api/buy_cart/", methods=["POST"])
def buy_cart():
    # get all products associated to cart
    cartItems = Cart.get_all_user(request.args['user_id'])
    # decrement product quantity
    cart_purchase_success = {}
    if cartItems is None:
        return jsonify(purchase_status=False)
    for item in cartItems:
        cart_purchase_success[item.product_name] = False
        pid = item.product_id
        quantity = item.cart_quantity * -1
        cost = abs(quantity) * item.product_price
        print(pid, quantity, cost)
        purchased = Product.change_quantity(pid, quantity)
        if purchased is None:
            continue
        # decrement buyer money
        # increment seller money
        buyer_cost = cost*-1
        seller_profit = cost
        buyer_id = request.args['user_id']
        seller_id = item.product_seller
        buyer_balance = User.change_balance(buyer_id, buyer_cost)
        if buyer_balance is None:
            purchased = Product.change_quantity(pid, quantity*-1)
            continue
        seller_balance = User.change_balance(seller_id, seller_profit)
        if seller_balance is None:
            purchased = Product.change_quantity(pid, quantity*-1)
            buyer_undo = User.change_balance(buyer_id, seller_profit) 
            continue
        cart_purchase_success[item.product_name] = True
    return json.dumps(cart_purchase_success)


