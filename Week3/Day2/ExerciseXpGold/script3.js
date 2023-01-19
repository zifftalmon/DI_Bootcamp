const form = document.querySelector('form')
console.log(form[1]);
let shoppingList = []
const clearButton = document.createElement('button')
const clearText = document.createTextNode('clear all')
clearButton.appendChild(clearText)
form.appendChild(clearButton)

const addItem = (e) => {
    shoppingList.push(e.target.form[0].value);
    console.log(shoppingList);
}

const clearAll = (e) => {
    e.preventDefault()
    shoppingList = []
    console.log(shoppingList);
}

form[1].addEventListener('click',addItem)
clearButton.addEventListener('click', clearAll)