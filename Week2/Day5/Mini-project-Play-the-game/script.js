function playTheGame () {
    let game = confirm("Would you like to play the game?");
    if (game == false) {
         alert("No problem, Goodbye");
         return
    }
    
    
let computerNumber = hiddenNumber(); 
let userNumber = prompt("please Enter a Number");
while (userNumber != computerNumber) {

if(numberValidity(userNumber)) {
    alert("Sorry not a number");
    return
}

if(range(userNumber)) {
    alert("sorry it\'s not a good number, Goodbye");
    return
}
userNumber = prompt("please Enter a Number");

}
if (computerNumber > userNumber) {
alert("Your number is bigger then the computer's, guess again");
}
if (computerNumber < userNumber) {
alert("Your number is smaller than the computer's, guess again");
}

}

function numberValidity (str) {
    return str.match("[a-z]+")
 }
 
 function range (number) {
     return number >= 10 || number <= 0;
 }
 
 function hiddenNumber () {
     Math.floor(Math.random() * 10);
 }


function compareNumbers (userNumber,computerNumber) {
if(userNumber == computerNumber) {
 alert("Winner"); 
 return 
}
}



// compareNumbers(userNumber, computerNumber)
