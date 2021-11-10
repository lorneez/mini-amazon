from models.product import Cart
from flask import Flask, request, jsonify, flash

# Configure application
app = Flask(__name__)

@app.route("/api_user_cart", methods=["GET"])
def all_products():
    return Cart.get_all_user(request.args["user_id"])

@app.route("/api/add_cart", methods=["POST"])
def add_to_cart():
    '''
    '''
    added_prod = Cart.add_product(request.args['user_id'], request.args['product_id'], request.args['quantity'])
    if added_prod is None:
        flash('Could not add product to cart')
        return None
    return jsonify(product = request.args['product_id'])

@app.route("/api/update_cart_quantity", methods=["POST"])
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

@app.route("/api/remove_cart_item", methods=["POST"])
def remove_item():
    '''
    '''
    if not Cart.cart_item_exists(request.args['user_id'], request.args['product_id']):
        flash('Product is not in cart. Cannot remove.')
        return None
    Cart.remove_product(request.args['user_id'], request.args['product_id'])
    return jsonify(product = request.args['product_id'])


