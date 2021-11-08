from models.product import Cart
from flask import Flask, request

# Configure application
app = Flask(__name__)

@app.route("/api_user_cart", methods=["GET"])
def all_products():
    return Cart.get_all_user(request.args["user_id"])

@app.route("/api/add_cart", methods=["POST"])
def add_to cart():
    '''
    '''
    added_prod = Cart.add_product(request.args['user_id'], request.args['product_id'], request.args['quantity'])
    if added_prod is None:
        flash('Could not add product to cart')
        return None
    return jsonify(product = request.args['product_id'])

