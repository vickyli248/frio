import requests, json

apikey = "?apiKey=376ef9c2feea48238de9c95e6e4d69a3"
urls = {'recipe':"https://api.spoonacular.com/recipes/findByIngredients"+apikey, 'substitutes' : "https://api.spoonacular.com/food/ingredients/substitutes"+apikey}

headers = {'Content-Type': "application/json"}

def get_valid_recipes(ingredients, amount=5):
    #GIVEN a comma separated string of ingredient names
    #RETURN a JSON list of AMOUNT number of recipes that can be made (represented as json dictionaries)
    querystring = {"ingredients":ingredients, "number":amount}
    response = requests.request("GET", urls['recipe'], headers=headers, params=querystring)
    return response.json()

def filter_incomplete_recipes(list):
    #GIVEN a JSON list of recipes, RETURN a list of recipes (json dictionaries) that are complete
    completerecipes = []
    for recipe in list:
        if recipe['missedIngredientCount'] == 0:
            completerecipes.append(recipe)
    return completerecipes

def get_substitutes(ingredient):
    #GIVEN a string name of an ingredient
    #RETURN a list of subsitutes in the form of strings
    querystring = {"ingredientName":ingredient}
    response = requests.request("GET", urls['substitutes'], headers=headers, params=querystring)
    return response.json()['substitutes']

    


#######################
#PRINT FUNCTIONS: ONLY FOR TERMINAL TESTING PURPOSES

def jprint(obj):
    #PRINT a formatted string of a GIVEN Python JSON object
    #I.E. : jprint(response.json())
    text = json.dumps(obj, sort_keys=True, indent=4)
    print(text)

def print_recipe_names(recipes):
    #PRINT the names of recipes, GIVEN a list of recipe dictionaries
    for recipe in recipes:
        if recipe['missedIngredientCount'] == 0:
            print('You have all the ingredients for ' + recipe['title'])
        else:
            missedIngredients = recipe['missedIngredients']
            stringList = ''
            for ingredient in missedIngredients:
                stringList += ingredient['name'] + ', '
            print('You need ' + stringList + 'to make ' + recipe['title'])

def print_substitutes(ingredient):
    #GIVEN a string name of an ingredient, PRINT out subsitutes
    print('Possible substitutes for ' + ingredient + ':')
    subs = get_substitutes(ingredient)
    for substitute in subs:
        print(substitute)
