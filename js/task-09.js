function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonRef = document.querySelector("button.change-color");
const spanRef = document.querySelector(".color")

const colorChange = () => {  
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  spanRef.textContent = `${getRandomHexColor()}`
}

buttonRef.addEventListener("click", colorChange)



// ====================Variant-2=======================

// buttonRef.addEventListener("click", () => {  
//   document.body.style.backgroundColor = `${getRandomHexColor()}`;
//   spanRef.textContent = `${getRandomHexColor()}`
// })







