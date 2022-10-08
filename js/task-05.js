const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
    if (outputRef.textContent = event.currentTarget.value) {
    } else {
        outputRef.textContent = "Anonymous";
    }
    
    console.log(event)
})

