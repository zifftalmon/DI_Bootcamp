let planets = ["Mercury", "Venus", "Earth", "moon" , "Mars", "Jupiter", "Saturn", "Uranus"];
let colors = ["purple", "green", "yellow", "pink", "brown", "gold", "silver", "white"];

for (let i = 0; i < planets.length; i++) {
    console.log(`The #${i} planet is ${planets[i]}`);
}

function addPlanet () {
    
    let sectionElement = document.querySelector("section");
for (let i = 0; i < colors.length; i++) {
    let divPlanet = document.createElement("div");
    divPlanet.classList.add("planet");
    divPlanet.style.backgroundColor = colors[i]; 
    sectionElement.appendChild(divPlanet);
}
}

addPlanet();