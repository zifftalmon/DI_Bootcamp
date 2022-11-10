const button = document.getElementById("search");

button.addEventListener("click", findPerson);

async function findPerson (e)  {
    e.preventDefault();
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

    const planet = await fetch(`https://www.swapi.tech/api/planets/${number}`)
    const response5 = await planet.json();
    const result5 = await response5.result.properties.name;

    async function data () {
        try {
            const allPromises = Promise.all([result1, result2, result3, result4, result5])
            const promises = await allPromises;
            const result = await promises;
            appendToPage(result);
        }catch {

        }
    }
    return data();

    function appendToPage (arr) {
        const info = document.getElementById("information");

        const header = document.createElement("h1");
        const headerText = document.createTextNode(arr[0])
        header.append(headerText);

        const height = document.createElement("p");        
        const heightText = document.createTextNode(`Height: ${arr[1]}`)
        height.appendChild(heightText);

        const gender = document.createElement("p");
        const genderText = document.createTextNode(`Gender: ${arr[2]}`)
        gender.append(genderText);

        const age = document.createElement("p");
        const ageText = document.createTextNode(`Birth Year: ${arr[3]}`)
        age.append(ageText);

        const planet = document.createElement("p");
        const planetText = document.createTextNode(`Home Planet: ${arr[4]}`)
        planet.append(planetText);

        info.appendChild(header);
        info.append(height);
        info.append(gender);
        info.append(age);
        info.append(planet);
    }
}