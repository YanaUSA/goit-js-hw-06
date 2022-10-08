const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');


inputRef.addEventListener('input', (event) => {
    
    const textSize = event.currentTarget.valueAsNumber;
    spanRef.style.fontSize = `${textSize}px`
    
    // console.log(event.currentTarget.valueAsNumber)
 })



