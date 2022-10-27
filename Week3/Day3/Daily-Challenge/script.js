let userInput = document.querySelector("input");
let allowedChars = /[A-Za-z]/;
userInput.addEventListener("keydown", event => {
    if(!allowedChars.test(event.key)) {
        event.preventDefault();
    }
})