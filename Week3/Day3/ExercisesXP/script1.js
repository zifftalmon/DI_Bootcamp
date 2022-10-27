// function helloWorld () {
//     alert("hello World");
// } 


// let div = document.getElementById("container");

// function newPara() {
//     let newP = document.createElement("p");
//     let hello = document.createTextNode("Hello World");
//     newP.appendChild(hello);
//     div.appendChild(newP);
// }

// setTimeout(helloWorld, 2000);
// setTimeout(newPara, 2000);




function newPara() {
    let div = document.getElementById("container");
    let newP = document.createElement("p");
    let hello = document.createTextNode("Hello World");
    newP.appendChild(hello);
    div.appendChild(newP)
}

let button = document.getElementById("clear");

function clearButton () {
clearInterval(timer);
console.log("stop");
}

button.addEventListener("click", clearButton)
let timer = setInterval(newPara, 2000);

let pCount = document.querySelectorAll("p");

function pInterval () {
    if (pCount == 5) {
        clearInterval(timer);
    }
}