const button = document.getElementById("search");

button.addEventListener("click", findPerson);

const info = document.getElementById("information");

async function findPerson (e)  {    
    const number = Math.floor(Math.random() * 60) + 1;

    const name = await fetch(`https://www.swapi.tech/api/people/${number}`)
    const response1 = await name.json();
    const result1 = await response1.result.properties.name;
        
    const height = await fetch(`https://www.swapi.tech/api/people/${number}`)
    const response2 = await height.json();
    const result2 = await response2.result.properties.height;
    
    const gender = await fetch(`https://www.swapi.tech/api/people/${number}`)
    const response3 = await gender.json();
    const result3 = await response3.result.properties.gender;

    const age = await fetch(`https://www.swapi.tech/api/people/${number}`)
    const response4 = await age.json();
    const result4 = await response4.result.properties.birth_year;

    const planet = await fetch(`https://www.swapi.tech/api/people/${number}`)
    const response5 = await planet.json();
    const getPlanet = await response5.result.properties.homeworld;
    const result = await fetch(getPlanet);
    const resultObj = await result.json();
    const result5 = await resultObj.result.properties.name;

    async function data () {
        const promiseArr = [result1, result2, result3, result4, result5];
        try {
            const allPromises = Promise.all(promiseArr)
            const promises = await allPromises;
            appendToPage(promises);
        }catch (Error) {
            let error = document.createElement("h1");

            let errorText = document.createTextNode("Oh No! That person isnt available!")

            error.style.textAlign = "center";

            error.append(errorText);

            info.append(error);
        }
    }
    return data();

    function appendToPage (arr) {
        const header = document.createElement("h1");
        const headerText = document.createTextNode(arr[0])
        header.append(headerText);

        const height = document.createElement("h2");        
        const heightText = document.createTextNode(`Height: ${arr[1]}`)
        height.appendChild(heightText);

        const gender = document.createElement("h2");
        const genderText = document.createTextNode(`Gender: ${arr[2]}`)
        gender.append(genderText);

        const age = document.createElement("h2");
        const ageText = document.createTextNode(`Birth Year: ${arr[3]}`)
        age.append(ageText);

        const planet = document.createElement("h2");
        const planetText = document.createTextNode(`Home Planet: ${arr[4]}`)
        planet.append(planetText);


        info.append(header);
        info.append(height);
        info.append(gender);
        info.append(age);
        info.append(planet);
        
        button.addEventListener("click", clearPage);
        
        function clearPage () {
            info.removeChild(header);
            info.removeChild(height);
            info.removeChild(gender);
            info.removeChild(age);
            info.removeChild(planet);
        }
    }  
}



