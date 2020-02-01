import requests, json

url = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=71dd2a0526f842549d117f89c0952f9a"

#Test List of ingredients
#name = "milk,flour,sugar,eggs,active yeast,unsalted butter"

#API requesting logistics
headers = {'Content-Type': "application/json"}


def jprint(obj):
    # Create a formatted string of the Python JSON object
    #jprint(response.json())
    text = json.dumps(obj, sort_keys=True, indent=4)
    print(text)



#Filter out incomplete recipes
#completerecipes = []
#for recipe in list:
#    if recipe['missedIngredientCount'] == 0:
#        completerecipes.append(recipe)


def print_names(recipes):
    #print the names of recipes, given a list of JSON recipe dictionaries
    for recipe in recipes:
        if recipe['missedIngredientCount'] == 0:
            print('You have all the ingredients for ' + recipe['title'])
        else:
            missedIngredients = recipe['missedIngredients']
            stringList = ''
            for ingredient in missedIngredients:
                stringList += ingredient['name'] + ', '
            print('You need ' + stringList + 'to make ' + recipe['title'])

def ingr_to_recipes(ingredients):
    #given a comma separated string of ingredients, return a list of JSON dictionaries, each being a recipe
    querystring = {"ingredients":ingredients}
    response = requests.request("GET", url, headers=headers, params=querystring)
    list = response.json()
    return list

