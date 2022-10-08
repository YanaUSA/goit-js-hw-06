const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector("#ingredients");

const ingridientsList = ingredients.map(item => {
  const element = document.createElement('li');
  element.textContent = item;
  element.classList.add('item');

  return element;
});

ingredientsRef.append(...ingridientsList);

console.log(ingridientsList)