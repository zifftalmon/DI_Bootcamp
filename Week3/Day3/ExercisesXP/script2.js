const redBox = document.getElementById("animate");

function myMove () {

    let start = Date.now();

let timer = setInterval(function() {
    let timePassed = Date.now() - start;
    console.log(timePassed);
    redBox.style.left = timePassed / 5 + 'px';
    if (timePassed > 1750) {
        clearInterval(timer);
    }
}, 20);
}