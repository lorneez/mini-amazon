from backend.app.models.product_review import PReview
from flask import Flask, request, jsonify, flash, Blueprint
import json

# Configure application
previews = Blueprint('previews',__name__)

@previews.route("/api/all_product_reviews/", methods=["GET"])
def all_previews():
    reviews = PReview.get_all_for_product(request.args["product_id"])
    return json.dumps([item.__dict__ for item in reviews], default=str)