var pasta = ["eggs", "flour", "salt"];
var pizza = ["sauce", "cheese", "water"];
var cookie = ["chocolate", "water", "wheat"];

var recipes = [pasta, pizza, cookie];
var recipe_names = ["pasta", "pizza", "cookie"];

let result = document.querySelector('.recipe-1');
let i1 = document.querySelector('.chosen-ingredient-1');
let i2 = document.querySelector('.chosen-ingredient-2');
let i3 = document.querySelector('.chosen-ingredient-3');

document.querySelector('.submit').addEventListener('click', function(event) {
    recipe_output([i1.value.toLowerCase(), i2.value.toLowerCase(), i3.value.toLowerCase()].sort());
});

function recipe_output(ingredients){
    for (let i = 0; i < recipes.length; i++){
      if (JSON.stringify(recipes[i])==JSON.stringify(ingredients)){
        result.innerText = recipe_names[i];
        break;
      }
      else {
        result.innerText = "";
      }

    }
}

var traderJoesPrices = [["wheat", "$2.99"], ["yeast", "$8.02"], ["water", "$0.99"], ["chocolate", "$3.99"], ["flour", "$2.99"], ["eggs", "$3.99"], ["salt", "$1.59"]];
var smartAndFinalPrices = [["wheat", "$2.50"], ["yeast", "$2.39"], ["water", "$2.99"], ["chocolate", "$4.79"], ["flour", "$8.99"], ["eggs", "$6.49"], ["salt", "$1.99"]];
var yAndYPrices = [["wheat", "$3.00"], ["yeast", "$4.49"], ["water", "$1.99"], ["chocolate", "$2.19"], ["flour", "$4.29"], ["eggs", "$5.49"], ["salt", "$1.99"]];
var atmSunshinePrices = [["wheat", "$2.11"], ["yeast", "$6.01"], ["water", "$0.99"], ["chocolate", "$1.69"], ["flour", "$2.49"], ["eggs", "$4.50"], ["salt", "$1.69"]];

let p1 = document.querySelector('.first-chosen');
let p2 = document.querySelector('.second-chosen');
let p3 = document.querySelector('.third-chosen');

let pr1 = document.querySelector('.first-chosen-price');
let pr2 = document.querySelector('.second-chosen-price');
let pr3 = document.querySelector('.third-chosen-price');

let selection = document.querySelector('.select-css');

document.querySelector('.select-css').addEventListener('click', function(event) {
    clear();
});

document.querySelector('.price-checker').addEventListener('click', function(event) {
    if (p1.innerText == ""){
      update_prices();
    }
    else{
      clear();
    }
});

document.querySelector('.all-prices').addEventListener('click', function(event) {
    redirect();
});

function getPrices(str){
  var prices;
  if (str == "traderJoes"){prices = traderJoesPrices}
  else if (str == "smartAndFinal"){prices = smartAndFinalPrices}
  else if (str == "yAndY"){prices = yAndYPrices}
  else if (str == "atmSunshine"){prices = atmSunshinePrices}
  return prices;
}

function clear(){
  p1.innerText = "";
  p2.innerText = "";
  p3.innerText = "";
  pr1.innerText = "";
  pr2.innerText = "";
  pr3.innerText = "";
}

function update_prices(){
  var prices = getPrices(selection.value);
  console.log(prices)
  p1.innerText = i1.value.toLowerCase();
  p2.innerText = i2.value.toLowerCase();
  p3.innerText = i3.value.toLowerCase();
  for (let i = 0; i < prices.length; i++){
    if (prices[i][0] == i1.value.toLowerCase()){
      pr1.innerText = prices[i][1];
      break;
    }
  }
  for (let i = 0; i < prices.length; i++){
    if (prices[i][0] == i2.value.toLowerCase()){
      pr2.innerText = prices[i][1];
      break;
    }
  }
  for (let i = 0; i < prices.length; i++){
    if (prices[i][0] == i3.value.toLowerCase()){
      pr3.innerText = prices[i][1];
      break;
    }
  }
}

function redirect(){
  if (selection.value == "traderJoes"){window.location.href = "https://www.traderjoes.com/";}
  else if (selection.value == "smartAndFinal"){window.location.href = "https://www.smartandfinal.com/";}
  else if (selection.value == "yAndY"){window.location.href = "https://www.google.com/search?rlz=1C5CHFA_enUS856US856&tbm=lcl&ei=1hg2Xv7yJbC50PEPoKqDoAo&q=Y+and+Y+Market&oq=Y+and+Y+Market&gs_l=psy-ab.3..0i22i30k1l2j38.4875.7891.0.8424.14.14.0.0.0.0.302.1394.4j4j1j1.10.0....0...1c.1.64.psy-ab..4.10.1387...0j0i67k1j0i131i273k1j0i273k1j0i131k1.0.or2iwmniqsQ#rlfi=hd:;si:1994866821941711466;mv:[[34.01369327731903,-118.2795356735801],[34.013333322680964,-118.27996992641988]]";}
  else if (selection.value == "atmSunshine"){window.location.href = "https://www.google.com/maps/place/ATM+Sunshine+Discount+Store/@34.0256837,-118.2966684,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c7f74f4d8aed:0xacd026f5f837420e!8m2!3d34.0256793!4d-118.2944797";}
}



var tips = [
'If you are short on time, pack a healthy portable snack such as fruit or a granola bar to eat during lecture.',
'Never skip breakfast. Ideally, your breakfast should have protein such as eggs or yogurt.',
'Invest in a good water bottle in order to stay hydrated throughout the day.',
'If you are having trouble consistently going to the gym, consider athletic clubs on campus.',
'If your dining hall is buffet-style, be sure to take a balance of key nutrients.',
'Tight on money? Most colleges have a pantry of food for those in need.'
];

let tip1 = document.querySelector('.tip-1');
let tip2 = document.querySelector('.tip-2');
let tip3 = document.querySelector('.tip-3');

var n1 = Math.floor(Math.random() * tips.length);
var n2 = Math.floor(Math.random() * tips.length);
var n3 = Math.floor(Math.random() * tips.length);

while(n1 == n2)
{
  n1 = Math.floor(Math.random() * tips.length);
}
while(n3 == n1 || n3 == n2)
{
  n3 = Math.floor(Math.random() * tips.length);
}

tip1.innerText = tips[n1];
tip2.innerText = tips[n2];
tip3.innerText = tips[n3];

var link1 = document.getElementById("l1");
var link2 = document.getElementById("l2");
var link3 = document.getElementById("l3");

document.querySelector('.buttons').addEventListener('click', function(event) {
  switch(event.target.value){
    case 'finances':
      link1.setAttribute("href", "https://www.everydollar.com/blog/create-a-meal-plan");
      link1.innerText = "Basic Guide to Creating a Meal Plan";
      link2.setAttribute("href", "https://www.fns.usda.gov/snap/supplemental-nutrition-assistance-program");
      link2.innerText = "Government SNAP program";
      link3.setAttribute("href","https://www.mashupmom.com/category/meal-planning/");
      link3.innerText = "Free Meal Planning Service";
    break;
    case 'nutrition':
      link1.setAttribute("href", "https://www.eatright.org/food#Nutrition");
      link1.innerText = "Academy of Nutrition and Dietetics";
      link2.setAttribute("href", "https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/healthy-recipes/art-20047195");
      link2.innerText = "Mayoclinic Healthy Eating Guide";
      link3.setAttribute("href","https://www.nhlbi.nih.gov/health/educational/wecan/eat-right/portion-distortion.htm");
      link3.innerText = "Portioning Guide";
    break;
    case 'recipes':
      link1.setAttribute("href", "https://www.allrecipes.com/");
      link1.innerText = "Master Recipe Catalogue";
      link2.setAttribute("href", "https://fitfoodiefinds.com/best-healthy-recipes-for-college-kids-budget-friendly-and-meal-prep/");
      link2.innerText = "Recipes for college students";
      link3.setAttribute("href","https://www.tasteofhome.com/collection/budget-friendly-dinners-that-are-big-on-taste/");
      link3.innerText = "Budget-friendly recipes by Taste of Home";
    break;
    default:

  }
});