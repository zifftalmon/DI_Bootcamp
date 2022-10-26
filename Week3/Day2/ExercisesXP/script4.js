let myForm = document.forms[0];

let radius = document.getElementsByTagName("input")[0].value;

let volume = document.getElementsByTagName("input")[1];

let submit = document.getElementsByTagName("input")[2];

let result = 0;

const pi = 3.14159;

submit.addEventListener("click", function() {
    result = (4 / 3 * pi) * (radius * 3)
    volume.appendChild.result;
    console.log(result);  
})

console.log(result);  

console.log(radius);  




