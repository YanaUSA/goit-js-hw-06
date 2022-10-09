function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxesRef = document.querySelector('#boxes');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const inputRef = document.querySelector('input');

let divToCreate;
const boxArray = [];
  
function createBoxes(amount) {
  let divStartSize = 20;
  for (let i = 0; i < amount; i += 1) {    
    divStartSize += 10;
    
    divToCreate = document.createElement('div');
    divToCreate.style.width = `${divStartSize}px`;
    divToCreate.style.height = `${divStartSize}px`;
    divToCreate.style.backgroundColor = `${getRandomHexColor()}`;
    boxArray.push(divToCreate);    
  };
  divBoxesRef.append(...boxArray);
};

function destroyBoxes() {
  divBoxesRef.innerHTML = '';
};

destroyBtnRef.addEventListener("click", destroyBoxes);

createBtnRef.addEventListener("click", () => {
  createBoxes(inputRef.valueAsNumber);
}
);