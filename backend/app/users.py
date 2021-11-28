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
    print("connection made")
    status=False
    token = None
    expiration = None
    user = User.get_by_auth(request.args['email'], request.args['password'])
    if user is None:
        flash('Invalid email or password')
    else:
        status = True
        token = User.encode_auth_token(user[0])
    return jsonify(login_status=status, uid = user[0], is_seller = user[1])

@users.route("/api/create_user/", methods=["POST"])
def register():
    '''
    '''
    if User.email_exists(request.args['email']):
        print("here1")
        # flash('Account with email already exists. Please try a different email.')
        return None
    user = User.register(request.args['email'], request.args['password'], request.args['name'], request.args['address'])
    if user is None:
        print("here2")
        # flash('Cannot create account.')
        return None
    
    print("here3")
    # flash('Congratulations! You are now registered')
    return jsonify(email = request.args['email'])

@users.route("/api/all_seller_reviews/", methods=["GET"])
def all_product_reviews():
    reviews = SReview.get_all_for_seller(request.args['seller_id'])
    return json.dumps([r.__dict__ for r in reviews], default=str)

# @bp.route('/logout')
# def logout():
#     logout_user()
#     return redirect(url_for('index.index'))