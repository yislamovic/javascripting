const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let arrayRecipe = [];
  let availableRecipe = '';
  function ingredientCheck(bakery, recipes) {
    for (let recipe of recipes) {
      for (let ingredientItem of recipe.ingredients) {
        for (let bakeryItem of bakery) {
          if (bakeryItem === ingredientItem) {
            arrayRecipe.push(bakeryItem);
          }
        }
      }
    }
  }
  ingredientCheck(bakeryA, recipes);
  ingredientCheck(bakeryB, recipes);
  for (let recipe of recipes) {
    if (arrayRecipe.includes(recipe.ingredients[0])
      &&
      arrayRecipe.includes(recipe.ingredients[1])) {
      availableRecipe = recipe.name;
    }
  }
  return availableRecipe;
}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));