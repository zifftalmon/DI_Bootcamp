let button  = document.getElementById("btn");

function blue () {
    button.style.backgroundColor = "blue";
}

function inlarge () {
    button.style.width = "90%";
}

function smaller () {
    button.style.width = "30%";
}

function opacity () {
    button.style.opacity = "0.5"
}

button.addEventListener("mouseover", blue);
button.addEventListener("click", inlarge);
button.addEventListener("mouseout", smaller);
button.addEventListener("dblclick", opacity);


