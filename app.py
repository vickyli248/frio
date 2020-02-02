from flask import Flask
from flask import request
from flask import render_template
from flask import url_for
from flask import redirect
from flask_sqlalchemy import SQLAlchemy
from Test2 import *


# globally accessible list of ingredients
global inputIngredientList
inputIngredientList = []

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////Users/vickyli/frio/ingredients6.db'

db = SQLAlchemy(app)

# ingredients class with attributes id, text, and existance
class Ingredients(db.Model):
	id = db.Column(db.Integer, primary_key = True)
	text = db.Column(db.String(200))
	gone = db.Column(db.Boolean)

#home and intro page
@app.route('/')
def welcome():
	return render_template('homepage.html')

#mainpage route
@app.route('/frio')
def frio():
	# ingredients is all ingredients in database
	ingredients = Ingredients.query.all()

	# turns inputIngredientList into comma-separated String
	result = ""
	for word in inputIngredientList:
		result += word + ","

	# calls Test2 functions to create recipe dictionary json file
	recipeDict = get_valid_recipes(result)

	# list for just recipe titles
	recipenames = []

	# adds to list of possible recipes
	for recipe in recipeDict:
		recipenames.append(recipe['title'])

	# connects to frio html file from our database and lists
	return render_template('frio.html', ingredients = ingredients, recipenames = recipenames)

# when hitting submit on adding ingredients
@app.route('/add', methods = ['POST'])
def add():
	# adds to ingredient database
	ingredient = Ingredients(text = request.form['ingredient'])
	db.session.add(ingredient)
	db.session.commit()

	# loads all ingredient objects into ings 
	ings = Ingredients.query.all()

	# for each ingredient, aggregate array of letters into one word and append to indgredient list
	for ing in ings:
		word = "".join(ing.text)
		if word not in inputIngredientList:
			inputIngredientList.append(word)
	# don't switch pages after submission
	return redirect(url_for('frio'))

# way to remove ingredients from database with buttons
@app.route('/gone/<id>')
def gone(id):
	# find the first ingredient that is tagged by ingredient ID
	ingredient = Ingredients.query.filter_by(id = int(id)).first()
	# deletes ingredient from database
	db.session.delete(ingredient)
	db.session.commit()
	# makes a word out of word to be deleted
	word = "".join(ingredient.text)
	#removes word from list to use with API
	inputIngredientList.remove(word)
	#sanity check 0:
	print(inputIngredientList)
	return redirect(url_for('frio'))

if __name__ == '__main__':
    app.run(debug=True)
    TEMPLATES_AUTO_RELOAD = True
    app.secret_key = 'super_secret_key'

