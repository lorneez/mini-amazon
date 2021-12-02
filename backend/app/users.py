from flask import flash, request, jsonify, Flask, Blueprint
from werkzeug.urls import url_parse
from datetime import timedelta
from backend.app.models.user import User
from backend.app.models.seller_review import SReview
import json

users = Blueprint('users',__name__)

# @bp.route('/login', methods=['GET', 'POST'])
# return the login status, token, and time in seconds the time of expiration of token
@users.route("/api/user_login/", methods=["POST"])
def login():
    '''
    if a valid user, this will provide info to front end necessary for logging the user in
    return: json object with login status, encoded jwt token, expiration time (datetime)
    '''
    status=False
    token = None
    expiration = None
    user = User.get_by_auth(request.args['email'], request.args['password'])
    if user is None:
        flash('Invalid email or password')
    else:
        status = True
        token = User.encode_auth_token(user[0])
    return jsonify(login_status=status, uid = user[0], is_seller = user[1], auth_token=token[0], expiration=token[1])

@users.route("/api/create_user/", methods=["POST"])
def register():
    '''
    '''
    if User.email_exists(request.args['email']):
        # flash('Account with email already exists. Please try a different email.')
        return jsonify(status=False, email = request.args['email'])
    user = User.register(request.args['email'], request.args['password'], request.args['name'], request.args['address'])
    if user is None:
        # flash('Cannot create account.')
        return jsonify(status=False, email = request.args['email'])
    
    print("here3")
    # flash('Congratulations! You are now registered')
    return jsonify(status=True, email = request.args['email'])

@users.route("/api/all_seller_reviews/", methods=["GET"])
def all_seller_reviews():
    reviews = SReview.get_all_for_seller(request.args['seller_id'])
    return json.dumps([r.__dict__ for r in reviews], default=str)

@users.route("/api/update_seller_review_text/", methods=["POST"])
def edit_product_review_text():
    review = SReview.update_text(request.args['user_id'], request.args['seller_id'], request.args['new_text'])
    if review is None:
        return jsonify(update_status=False)
    return json.dumps(review.__dict__, default=str)

@users.route("/api/update_seller_review_stars/", methods=["POST"])
def edit_product_review_stars():
    review = SReview.update_stars(request.args['user_id'], request.args['seller_id'], request.args['stars'])
    if review is None:
        return jsonify(update_status=False)
    return json.dumps(review.__dict__, default=str)

@users.route("/api/add_seller_review/", methods=["POST"])
def add_product_review():
    review = SReview.add_product_review(request.args['user_id'], request.args['seller_id'], request.args['review_text'], request.args['stars'])
    if review is None:
        return jsonify(update_status=False)
    return json.dumps(review.__dict__, default=str)

# @bp.route('/logout')
# def logout():
#     logout_user()
#     return redirect(url_for('index.index'))