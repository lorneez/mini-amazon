from backend.app.models.saved import Saved
from flask import Flask, request, jsonify, flash, Blueprint
import json

# Configure application
saved = Blueprint('saved',__name__)

@saved.route("/api/user_all_saved/", methods=["GET"])
def all_saved():
    print("connected")
    saved = Saved.get_all_user(request.args["user_id"])
    return json.dumps([item.__dict__ for item in saved], default=str)

@saved.route("/api/add_saved/", methods=["POST"])
def add_saved_item():
    '''
    '''
    if not Saved.product_exists(request.args.get('user_id'), request.args.get('product_id')):
        print("here")
        saved_prod = Saved.add_product(request.args.get('user_id'), request.args.get('product_id'))
    else:
        print("here2")
        saved_prod = Saved.update_time(request.args.get('user_id'), request.args.get('product_id'))
    if saved_prod is None:
        print("here3")
        # flash('Could not save item to account')
        return None
    return jsonify(product = request.args.get('product_id'))

@saved.route("/api/remove_saved_item/", methods=["POST"])
def remove_item():
    '''
    '''
    if not Saved.product_exists(request.args['user_id'], request.args['product_id']):
        flash('Product is not saved. Cannot remove.')
        return None
    Saved.remove_product(request.args['user_id'], request.args['product_id'])
    return jsonify(product = request.args['product_id'])