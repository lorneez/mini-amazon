from  backend.app import create_app
from flask_cors import CORS

app = create_app()
CORS(app)
from backend.app.products import products
from backend.app.cart import cart
from backend.app.orders import orders
from backend.app.saved import saved
from backend.app.users import users

app.register_blueprint(products)
app.register_blueprint(cart)
app.register_blueprint(orders)
app.register_blueprint(saved)
app.register_blueprint(users)

@app.route('/hello/', methods=['GET', 'POST'])
def welcome():
    return "Hello Lorne!"
