from  backend.app import create_app
app = create_app()

from backend.app.products import products
app.register_blueprint(products)

@app.route('/hello/', methods=['GET', 'POST'])
def welcome():
    return "Hello Lorne!"