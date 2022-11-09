//RETRIVING THE FORM
const form = document.querySelector("form");
//ADDING EVENT TO THE FORM SUBMIT
form.addEventListener("submit", getSunrise);
//FUNCTION FOR THE SUBMITION
function getSunrise(e) {
    e.preventDefault();
    //CREATING AN ARRAY OF THE FORM VALUES
    const [latitude1,longitutde1,latitude2,longitutde2] = [...form.elements].map((input) =>input.value);
    //URL FOR THE FIRST TWO INPUTS TO RETRIVE LAT AND LONG FOR THE FETCHING
    const url1 = `https://api.sunrise-sunset.org/json?lat=${latitude1}&lng=${longitutde1}`;
    //URL FOR THE SECOND TWO INPUTS TO RETRIVE LAT AND LONG FOR THE FETCHING
    const url2 = `https://api.sunrise-sunset.org/json?lat=${latitude2}&lng=${longitutde2}`;

    //FETCHING THE API 
    const promise1 = fetch(url1).then ((res) => res.json());

    const promise2 = fetch(url2).then ((res) => res.json());
    //FUNCTION FOR RETRIEVING THE SUNRISE OF EACH CITY
    async function twoSunrise () {
       try {
        const allPromises = Promise.all([promise1, promise2])
        const responses = await allPromises;
        const results1 = await responses[0].results.sunrise
        const results2 = await responses[1].results.sunrise
        console.log(results1,results2);

       } catch (Error) {
        console.log("Wrong latitude or longtitude", Error);

       }
    }    
    return twoSunrise();
}




