let input = document.querySelector("#gif")
const xhr = new XMLHttpRequest();

const form = document.querySelector("#frm");
const button = document.querySelector("#search");

let delAllButton = document.createElement("button");    
let delAllText = document.createTextNode("delete all")
delAllButton.append(delAllText);
form.appendChild(delAllButton);

button.addEventListener("click", addGif);
function addGif (e) {
    e.preventDefault();

    const url = `https://api.giphy.com/v1/gifs/search?q=${input.value}&rating=g&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    
    xhr.open("GET", url);
    
    xhr.responseType = "json";

    xhr.send();



xhr.onload = function () {
    let section  = document.getElementById("gifSec");

    let image = document.createElement("img");
    
    let delButton = document.createElement("button");

    let delText = document.createTextNode("delete");

    delButton.append(delText);
    
    image.src=xhr.response.data[0].images.downsized.url;

    section.appendChild(image);

    section.appendChild(delButton);

    delButton.addEventListener("click", delGif)
    function delGif (e) {
        e.preventDefault();

        section.remove(image.src = "");
    }




    delAllButton.addEventListener("click", delAllGifs);
    function delAllGifs (e) {
        let section  = document.getElementById("gifSec");

        section.remove(image);
        section.ramove(delButton);
    }

}
}