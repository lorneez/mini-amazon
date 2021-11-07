from models.product import Cart
from flask import Flask, request

# Configure application
app = Flask(__name__)

@app.route("/apiuser_cart", methods=["GET"])
def all_products():
    return Cart.get_all_user