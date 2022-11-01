const navbar = document.getElementById("nav"); 
(function (userName) {
    if (userName === "John") {
        let div = document.createElement("div");
        let name = userName;
        let image = document.createElement("img");
        image.setAttribute("src","John-Travolta.jpg")
        image.style.width = "4%";
        image.style.borderRadius = "50%";
        div.append(name);
        navbar.append(div);
        navbar.append(image);
    } else {
        alert ("sorry, wrong username");
    }
}("John"))

// console.log(navbar);