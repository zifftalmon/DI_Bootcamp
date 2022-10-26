let allBoldItems;

function getBold_items() {
    let boldList = document.querySelectorAll("strong");
    allBoldItems = boldList    
}
getBold_items();

function highlight(color) {
    for(let i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = "blue";
    }
}

function return_normal(color) {
    for(let i = 0; i< allBoldItems.length; i++) {
        allBoldItems[i].style.color = "black";
    }
}


let p = document.querySelector("p");

p.addEventListener("mouseover", highlight);
p.addEventListener("mouseout", return_normal);





