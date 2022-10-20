// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

//Exercise1

// let dateOne = Number(prompt("enter your birth year"));

// let dateTwo = Number(prompt("enter your sibling birth year"));

// if (dateOne > dateTwo) {
//     console.log(dateTwo + (dateOne - dateTwo) * 2);
// } else if (dateOne < dateTwo) {
//     console.log(dateOne + (dateTwo - dateOne) * 2);
// }

/*
re-reading other calculative problems using variables and\or arrays i took the principle of substracting one variable 
from another i realized that for getting the exact equal difference between dates i'll nedd to either multiply or divide
the outcome of such subtraction, after realizing that all i had to do is write an inclusive if statement for any given date
*/

//Exercise 2

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.

// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length

let zipCode = prompt("Please enter your zip code");

let string = [/"a-zA-Z"/];

if (zipCode.length === 5 && zipCode.trim() && zipCode.includes(string) !== zipCode) {
    console.log("success");
} else {
    console.log("error");
}

console.log(string);
console.log(zipCode);