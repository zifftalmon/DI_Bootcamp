const selects = document.querySelectorAll("select");

async function getRatesKey () {
    const currencyPromise = await fetch("https://v6.exchangerate-api.com/v6/20a5025d282a16c6561cb0a3/latest/USD");
    const currencyObj = await currencyPromise.json();
    const currency = await currencyObj.conversion_rates;
    const keysArr = Object.entries(currency);
    keysArr.map((element) => {
        let option = document.createElement("option");
        let optionText = document.createTextNode(element[0]);
        option.append(optionText);
        selects[0].append(option);
    });
    keysArr.map((element) => {
        let option = document.createElement("option");
        let optionText = document.createTextNode(element[0]);
        option.append(optionText);
        selects[1].append(option);
    });
}
getRatesKey();

const form = document.getElementById("form");

form.addEventListener("submit", getCurrnecy);

const number = document.getElementById("number");

const resultDiv = document.getElementById("result");

function getCurrnecy(e) {
    e.preventDefault();
    console.log(number.value);
    resultCurrnecy();
    
    async function resultCurrnecy () {
        const request = await fetch(`https://v6.exchangerate-api.com/v6/20a5025d282a16c6561cb0a3/pair/${selects[0].value}/${selects[1].value}`);
        const requestJson = await request.json();
        const conversionRate = await requestJson.conversion_rate;
        let result = (conversionRate * number.value);
        
        const resultTitle = document.createElement("h3");
        const resultText = document.createTextNode(result);
        resultTitle.appendChild(resultText);
        resultDiv.appendChild(resultTitle);

        form.addEventListener("click", clearDiv);
        
        function clearDiv () {
            resultDiv.removeChild(resultTitle);
        }
    }
        
}
