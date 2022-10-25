let changedNav = document.getElementById("navBar");

changedNav.setAttribute("id", "socialNetworkNavigation");

let newLi = document.createElement("li");

let newText = document.createTextNode("logout");

newLi.append(newText);

console.log(newLi);

let newUL = document.querySelector("ul").appendChild(newLi);