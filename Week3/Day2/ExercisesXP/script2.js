 let myForm = document.forms[0];
    console.log(myForm);

    let firstInput = document.getElementById("fname");

    let secondInput = document.getElementById("lname");

    let submitInput = document.getElementById("submit");
    console.log(firstInput, secondInput, submitInput);

    let firstName = document.getElementsByName("fname");

    let secondName = document.getElementsByName("lname");

    console.log(firstName,secondName);

    let ulHtml = document.querySelector(".usersAnswer");

    myForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      let inputOne = firstInput;
      let inputTwo = secondInput;

      let inputOneValue = inputOne.value;
      let inputTwoValue = inputTwo.value;

      if (inputOneValue !== "") {
         let firstLi = document.createElement("li");
         firstLi.textContent = inputOneValue;
         ulHtml.appendChild(firstLi);
      }

      if (inputTwoValue !== "") {
         let secondLi = document.createElement("li");
         secondLi.textContent = inputTwoValue;
         ulHtml.appendChild(secondLi);
      } 
    })
