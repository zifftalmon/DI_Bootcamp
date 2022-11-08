const form = document.querySelector("#frm");
form.addEventListener("submit", addGif);
const section  = document.getElementById("gifSec");

function addGif (e) {
    e.preventDefault();
    const userInput = e.target.gif.value;
    gifRequest(userInput);
}

function gifRequest(input) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.giphy.com/v1/gifs/random?tag=${input}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)    
    
    xhr.responseType = "json";
    
    xhr.send();
    
    xhr.onload = function () {
        
        if (xhr.status != 200) {
            console.log("error");
        }else {
            appendGifToPage(xhr.response.data.images.original.url)
        }
        
        function appendGifToPage(url) {
            const image = document.createElement("img");
            image.src=url;
            section.append(image);
            let delAllButton = document.createElement("button");
            let delAllText = document.createTextNode("delete all");
            delAllButton.append(delAllText);
            form.appendChild(delAllButton);
            
            let delButton = document.createElement("button");
            let delText = document.createTextNode("delete");
            delButton.append(delText);
            section.append(delButton);
            delButton.addEventListener("click", delGif)
            function delGif (e) {
                e.preventDefault();
                section.removeChild(image);
                section.removeChild(e.target);   
            }
            delAllButton.addEventListener("click", delAllGifs);
            function delAllGifs (e) {
                e.preventDefault();
                form.removeChild(e.target);
                section.innerHTML = "";
            }   
        
    }
    
}

}
