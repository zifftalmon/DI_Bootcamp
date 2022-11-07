const xhr1 = new XMLHttpRequest();

function getGiphy () {
        
    xhr1.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");

    xhr1.responseType = "json";

    xhr1.send();

    console.log(xhr1);

}

getGiphy();

const xhr2 = new XMLHttpRequest();

// function getSun () {
        
//     xhr2.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");

//     xhr2.responseType = "json";

//     xhr2.send();

//     console.log(xhr2);

// }

// getSun();