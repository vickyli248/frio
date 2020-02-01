from flask import Flask
from flask import request
from flask import render_template
from flask import url_for
from flask import redirect
from flask_sqlalchemy import SQLAlchemy
from Test import *


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////Users/vickyli/frio/ingredients.db'

db = SQLAlchemy(app)

class Ingredients(db.Model):
	id = db.Column(db.Integer, primary_key = True)
	text = db.Column(db.String(200))

@app.route('/')
@app.route('/welcome')
@app.route('/home')
def welcome():
	return render_template('homepage.html')

@app.route('/frio')
def frio():
	return render_template('frio.html')

@app.route('/add', methods = ['POST'])
def add():
	inputIngredientList = ""
	ingredient = Ingredients(text = request.form['ingredient'])
	db.session.add(ingredient)
	db.session.commit()
	ings = Ingredients.query.all()
	for ing in ings:
		inputIngredientList += ing.text + ","
	print_names(ingr_to_recipes(inputIngredientList))
	return redirect(url_for('frio'))

	
if __name__ == '__main__':
    app.run(debug=True)
    TEMPLATES_AUTO_RELOAD = True
    app.secret_key = 'super_secret_key'

