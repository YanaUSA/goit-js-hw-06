const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value')
let counterValue = 0;

decrementBtn.addEventListener("click", () => {
    counterValue -= 1; 
    valueRef.textContent = counterValue; 
    
    console.log(counterValue)
})

incrementBtn.addEventListener("click", () => {
    counterValue += 1; 
    valueRef.textContent = counterValue;
    
    console.log(counterValue)
})
