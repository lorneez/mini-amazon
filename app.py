from  backend.app import create_app
app = create_app()

from backend.app import products

@app.route('/hello/', methods=['GET', 'POST'])
def welcome():
    return "Hello Lorne!"