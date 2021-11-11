from flask import flash, request, jsonify, Flask, Blueprint
from werkzeug.urls import url_parse
from datetime import timedelta
from backend.app.models.user import User

users = Blueprint('users',__name__)

# @bp.route('/login', methods=['GET', 'POST'])
# return the login status, token, and time in seconds the time of expiration of token
@users.route("/api/user_login", methods=["POST"])
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
        token, expiration = User.encode_auth_token(request.args['email'])
    return jsonify(login_status=status, auth_token = token, expir = expiration)

@users.route("/api/create_user", methods=["POST"])
def register():
    '''
    '''
    if User.email_exists(request.args['email']):
        flash('Account with email already exists. Please try a different email.')
        return None
    user = User.register(request.args['email'], request.args['password'], request.args['name'])
    if user is None:
        flash('Cannot create account.')
        return None
    flash('Congratulations! You are now registered')
    return jsonify(email = request.args['email'])

# @bp.route('/logout')
# def logout():
#     logout_user()
#     return redirect(url_for('index.index'))