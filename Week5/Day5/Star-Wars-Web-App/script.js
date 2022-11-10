const button = document.getElementById("search");

button.addEventListener("click", findPerson);



async function findPerson (e)  {
    e.preventDefault();
    const number = Math.floor(Math.random() * 60) + 1;
    console.log(number);

    const name = await fetch(`https://www.swapi.tech/api/people/${number}`)
    const response1 = await name.json();
    const result1 = await response1.result.properties.name;
    // console.log(result1);

    
    const height = await fetch(`https://www.swapi.tech/api/people/${number}`)
    const response2 = await height.json();
    const result2 = await response2.result.properties.height;
    // console.log(result2);

    
    const gender = await fetch(`https://www.swapi.tech/api/people/${number}`)
    const response3 = await gender.json();
    const result3 = await response3.result.properties.gender;
    // console.log(result3);

    
    const age = await fetch(`https://www.swapi.tech/api/people/${number}`)
    const response4 = await age.json();
    const result4 = await response4.result.properties.birth_year;
    // console.log(result4);

    const planet = await fetch(`https://www.swapi.tech/api/planets/${number}`)
    const response5 = await planet.json();
    const result5 = await response5.result.properties.name;
    // console.log(result5);

    async function data () {
        try {
            const allPromises = Promise.all([result1, result2, result3, result4, result5])
            const promises = await allPromises;
            const result = await promises;
            console.log(result);
            appendToPage(result);
        }catch {

        }
    }
    return data();

    function appendToPage (arr) {
        const info = document.getElementById("information");

        const para = document.createElement("p");

        const text = document.createTextNode(arr);

        para.append(text);

        info.append(para);


    }
}