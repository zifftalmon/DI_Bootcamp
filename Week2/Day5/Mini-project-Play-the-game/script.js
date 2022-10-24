function playTheGame () {
    let game = confirm("Would you like to play the game?");
    if (game == false) {
        return alert("No problem, Goodbye");
    } else  {
        return prompt("please neter a number between 1 - 10")
    }
}


let userNumber = playTheGame();

function numberValidity () {
    if (userNumber.match("[a-z]+")) {
        return alert("Sorry Not a number, Goodbye");
    } else if (userNumber > 10 || userNumber < 0) {
        return alert("sorry it\'s not a good number, Goodbye")
    } else {
        return userNumber;
    }
}

let computerNumber = Math.floor(Math.random() * 10);

function compareNumbers (userNumber,computerNumber) {
    if (userNumber == computerNumber) {
        return alert("WINNER"); 
    } else if (computerNumber < userNumber) {
        return prompt("Your number is smaller than the computer's, guess again");
    } else if (computerNumber > userNumber) {
        return prompt("Your number is bigger then the computer's, guess again");
    }  else {
        return alert("out of chances");
    }
}


compareNumbers(userNumber, computerNumber);
