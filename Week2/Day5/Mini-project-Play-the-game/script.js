function playTheGame () {
    let game = confirm("Would you like to play the game?");
    if (game == false) {
         alert("No problem, Goodbye");
         return
    }
    
    
let computerNumber = hiddenNumber(); 
let input = prompt("please Enter a Number");
let userNumber = input;
let tries = 0;
while (userNumber != computerNumber) {
tries = tries +1;
if (tries === 3) {
    alert("sorry, too many tries, you lose!");
    return
}
if(numberValidity(userNumber)) {
    alert("Sorry not a number");
    return
}

if(range(userNumber)) {
    alert("sorry it\'s not a good number, Goodbye");
    return
}

if (userNumber > computerNumber) {
    alert("Your number is bigger then the computer's, guess again");
}

if (userNumber < computerNumber) {
    alert("Your number is smaller then the computer's, guess again");
}
userNumber = prompt("please Enter a Number");
}
if (userNumber == computerNumber) {
    alert("Winner!")
    return
}
}



function numberValidity (str) {
    return str.match("[a-z]+")
 }
 
 function range (number) {
     return number >= 10 || number <= 0;
 }
 
 function hiddenNumber () {
     return Math.floor(Math.random() * 11);
 }


function compareNumbers (userNumber,computerNumber) {
if(userNumber === computerNumber) {
 alert("Winner"); 
 return 
}
}

/*
this exercise was very difficult for me, at first i wrote three different functions, one for the beginning of the game, th other for the 
number check, and the third for the comparison. however, my function were built of messy if statements instead of utilizing smaller functions inside
the play game function, this led to a correctly working game but a very non-efficient code, moreover, i got stuck when i reached the segement where i need to limit the number
of tries, i tries looking online but it was difficult to articulate what i need. when i couldn;t find an accurate explanation and\or help online i turend toa relative which is also 
a programmer, he explained to me why i need to utilize smaller functions inside a bigger one, it was difficult to figure out & implement exactly
what he meant, lastly i turned to the solution video as i felt i needed a walkthrough of the problem, this along with the suggestion was most helpful and clarifying about why the solution
is what it is
*/
