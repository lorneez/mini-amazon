from models.product import Cart
from flask import Flask, request

# Configure application
app = Flask(__name__)

@app.route("/api_user_cart", methods=["GET"])
def all_products():
    return Cart.get_all_user(request.args["user_id"])