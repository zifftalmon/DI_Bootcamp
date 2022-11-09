// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

const details = async () => {
    try {
        const response = await fetch ("https://www.swapi.tech/api/starships/9/");
        const data = await response.json();
        console.log(data);

    }

    catch (e) {
        console.log(e);
    }
}

details();