// Using a DOM property, retrieve the h1 and console.log it.

// Using DOM methods, remove the last paragraph in the <article> tag.

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)


let title = document.querySelector("h1");

console.log(title);

let para = document.getElementsByTagName("p")[2];

para.remove();

let title2 = document.querySelector("h2");

title2.addEventListener("click", redBg);

function redBg() {
    title2.style.backgroundColor = "red";
}

let h3 = document.querySelector("h3");

h3.addEventListener("click", noDisplay)

function noDisplay() {
    h3.style.display = "none";
}

let button = document.querySelector("button");

button.addEventListener("click", boldText);

function boldText() {
    document.body.style.fontWeight = "bold";
}

function random(number) {
    return Math.floor(Math.random() * 100) + 1;
}

title.addEventListener("mouseover", randomSize);

function randomSize() {
    title.style.fontSize = `${random(100)}px`;
}

title2.addEventListener("mouseover", fadeOut);

function fadeOut() {
    title2.setAttribute("class", "fade-in");
}

