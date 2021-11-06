from flask import flash, request, jsonify, Flask
from werkzeug.urls import url_parse
from flask_login import login_user, logout_user, current_user
from flask_babel import _, lazy_gettext as _l
from datetime import timedelta
from models.product import User

app = Flask(__name__)

# @bp.route('/login', methods=['GET', 'POST'])
# return the login status, token, and time in seconds the time of expiration of token
@app.route("/api/user_login", methods=["POST"])
def login():
    '''
    if a valid user, this will provide info to front end necessary for logging the user in
    return: json object with login status, encoded jwt token, expiration time (datetime)
    '''
    incoming = request.get_json()
    status=False
    token = None
    expiration = None
    user = User.get_by_auth(incoming['email'], incoming['password'])
    if user is None:
        flash('Invalid email or password')
    else:
        status = True
        token, expiration = User.encode_auth_token(incoming['email'])
    return jsonify(login_status=status, auth_token = token, expir = expiration)

@app.route("/api/create_user", methods=["POST"])
def register():
    '''
    '''
    incoming = request.get_json()
    if User.email_exists(incoming['email']):
        flash('Account with email already exists. Please try a different email.')
        return None
    user = User.register(incoming['email'], incoming['password'], incoming['name'])
    if user is None:
        flash('Cannot create account.')
        return None
    flash('Congratulations! You are now registered')
    return jsonify(email = incoming['email'])

# @bp.route('/logout')
# def logout():
#     logout_user()
#     return redirect(url_for('index.index'))