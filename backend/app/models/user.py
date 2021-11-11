from flask import current_app as app
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime
from flask_login import UserMixin

class User(UserMixin):
    def __init__(self, id, email, name, is_seller, balance, address):
        self.id = id
        self.email = email
        self.name = name
        self.is_seller = is_seller
        self.balance = balance
        self.address = address

    @staticmethod
    def get_by_auth(email, password):
        rows = app.db.execute("""
SELECT password, id, email, name, is_seller, balance, address
FROM Users
WHERE email = :email
""",
                              email=email)
        if not rows:  # email not found
            return None
        elif not check_password_hash(rows[0][0], password):
            # incorrect password
            return None
        else:
            return User(*(rows[0][1:]))

    @staticmethod
    def encode_auth_token(self, user_id):
        # Generates the Auth Token
        # return: encoded jwt token and datetime object of expiration
        try:
            payload = {
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, hours=5),
                'iat': datetime.datetime.utcnow(),
                'sub': user_id
            }
            return jwt.encode(
                payload,
                app.config.get('SECRET_KEY'),
                algorithm='HS256'
            ), payload['exp']
        except Exception as e:
            return e

    @staticmethod
    def email_exists(email):
        rows = app.db.execute("""
SELECT email
FROM Users
WHERE email = :email
""",
                              email=email)
        return len(rows) > 0

    @staticmethod
    def register(email, password, name):
        try:
            rows = app.db.execute("""
INSERT INTO Users(email, password, name)
VALUES(:email, :password, :name)
RETURNING id
""",
                                  email = email,
                                  password = generate_password_hash(password),
                                  name = name)
            id = rows[0][0]
            return User.get(id)
        except Exception:
            # likely email already in use; better error checking and
            # reporting needed
            return None

#     @staticmethod
#     @login.user_loader
#     def get(id):
#         rows = app.db.execute("""
# SELECT id, email, name
# FROM Users
# WHERE id = :id
# """,
#                               id=id)
#         return User(*(rows[0])) if rows else None