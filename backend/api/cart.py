from models.product import Cart
from flask import Flask, request

# Configure application
app = Flask(__name__)

@app.route("/apiuser_cart", methods=["GET"])
def all_products():
    incoming = request.get_json()
    return Cart.get_all_user(incoming["user_id"])