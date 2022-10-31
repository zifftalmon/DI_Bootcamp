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



let div = document.getElementById("container");

function newPara() {
    let newP = document.createElement("p");
    let hello = document.createTextNode("Hello World");
    newP.appendChild(hello);
    if(div.childNodes.length < 5) {
    div.appendChild(newP)
    } else {
        clearInterval(timer);
    }
}

let button = document.getElementById("clear");

function clearButton () {
clearInterval(timer);
console.log("stop");
}

button.addEventListener("click", clearButton)
let timer = setInterval(newPara, 1000);

console.log(timer);