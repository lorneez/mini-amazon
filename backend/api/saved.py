from models.product import Saved
from flask import Flask, request

# Configure application
app = Flask(__name__)*b

@app.route("/api/user_all_saved", methods=["GET"])
def all_saved():
    return Saved.get_all_user(request.args["user_id"])

@app.route("/api/add_saved", methods=["POST"])
def add_saved_item():
    '''
    '''
    if not Saved.product_exists(request.args['user_id'], request.args['product_id']):
        saved_prod = Saved.add_product(request.args['user_id'], request.args['product_id'])
    else:
        saved_prod = Saved.update_time(request.args['user_id'], request.args['product_id'])
    if saved_prod is None:
        flash('Could not save item to account')
        return None
    return jsonify(product = request.args['product_id'])