const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');
// console.log(ingredientsRef);

const liIngrediendRefs = ingredients.map(ingredient => {
 const ingredientRef = document.createElement('li');
  ingredientRef.textContent = ingredient;
  ingredientRef.classList.add('item');
 return ingredientRef;
});

ingredientsRef.append(...liIngrediendRefs);
// console.log(ingredientsRef);