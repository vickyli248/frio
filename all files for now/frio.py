from flask import Flask
from flask import request
app = Flask(__name__)

@app.route('/')
@app.route('/welcome')
@app.route('/home')
def welcome():
	return render_template('homepage.html')
	
if __name__ == '__main__':
    app.run(debug=True)
    TEMPLATES_AUTO_RELOAD = True
    app.secret_key = 'super_secret_key'

