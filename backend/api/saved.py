from models.product import Saved
from flask import Flask, request

# Configure application
app = Flask(__name__)*b

@app.route("/api/user_all_saved", methods=["GET"])
def all_saved():
    return Cart.get_all_user(incoming["user_id"])