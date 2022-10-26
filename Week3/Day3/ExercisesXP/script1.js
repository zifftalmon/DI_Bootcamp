function helloWorld () {
    alert("hello World");
} 


let div = document.getElementById("container");

function newPara() {
    let newP = document.createElement("p");
    let hello = document.createTextNode("Hello World");
    newP.appendChild(hello);
    div.appendChild(newP);
}

setTimeout(helloWorld, 2000);
setTimeout(newPara, 2000);
let button = document.getElementById("clear");

function clearTimeout () {
clearTimeout(helloWorld);
}

button.addEventListener("click", clearTimeout)
