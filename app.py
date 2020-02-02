from flask import Flask
from flask import request
from flask import render_template
from flask import url_for
from flask import redirect
from flask_sqlalchemy import SQLAlchemy
from Test import *


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////Users/vickyli/frio/ingredients3.db'

db = SQLAlchemy(app)

class Ingredients(db.Model):
	id = db.Column(db.Integer, primary_key = True)
	text = db.Column(db.String(200))
	gone = db.Column(db.Boolean)


@app.route('/')
@app.route('/welcome')
@app.route('/home')
def welcome():
	return render_template('homepage.html')

@app.route('/frio')
def frio():
	ingredients = Ingredients.query.filter_by(gone = False).all()
	return render_template('frio.html', ingredients = ingredients)

@app.route('/add', methods = ['POST'])
def add():
	inputIngredientList = ""
	ingredient = Ingredients(text = request.form['ingredient'], gone = False)
	db.session.add(ingredient)
	db.session.commit() 
	ings = Ingredients.query.all()
	for ing in ings:
		inputIngredientList += ing.text + ","
	#print_names(ingr_to_recipes(inputIngredientList))
	return redirect(url_for('frio'))

@app.route('/gone/<id>')
def gone(id):
	ingredient = Ingredients.query.filter_by(id = int(id)).first()
	ingredient.gone = True
	db.session.commit()
	return redirect(url_for('frio'))

if __name__ == '__main__':
    app.run(debug=True)
    TEMPLATES_AUTO_RELOAD = True
    app.secret_key = 'super_secret_key'

