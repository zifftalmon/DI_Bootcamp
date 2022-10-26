 
let myForm = document.forms[0];
myForm.addEventListener('submit', function(e) {
e.preventDefault();
     let myForm = document.forms[0];
     console.log(myForm);

     document.forms[0].fname;
     let ulHtml = document.querySelector(".usersAnswer");
     console.log(ulHtml);
     let firstInput = myForm.elements.fname;
     let secondInput = myForm.elements.lname;

     let firstInputValue = firstInput.value;
     let secondInputValue = secondInput.Value;
     if (firstInputValue !== "" && secondInputValue !== "")
      {
     let firstLi = document.createElement("li");
     firstLi.textContent = firstInputValue;
     ulHtml.appendChild(firstLi);


     let secondLi = document.createElement("li");     
     secondLi.textContent = secondInputValue;
     ulHtml.appendChild(secondLi);
     
     } else {
     console.log("there is no input")
     return 
  }});