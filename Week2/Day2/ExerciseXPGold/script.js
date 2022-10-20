//Exercise1

// let language = prompt("what language do you speak?").toLowerCase();

// switch(language) {
//     case "french":
//         alert("Bonjour");
//         break;
//     case "english":
//         alert("Hello");
//         break;
//     case "hebrew":
//         alert("Shalom");
//         break;
//     default :
//     alert("01110011 01101111 01110010 01110010 01111001");
// };

//Exercise2

// Ask the user for their grade.

// If the grade is bigger than 90, console.log “A”

// If the grade is between 80 and 90 (included), console.log “B”
// If the grade is between 70(included) and 80 (included), console.log “C”
// If the grade is lower than 70, console.log “D”


// let grade = prompt("What is your grade?");

// if (grade > 90) {
//     console.log("A");
// } else if (grade <= 90 && grade >= 80) {
//     console.log("B");
// } else if (grade <= 80 && grade >= 70) {
//     console.log("C");
// } else {
//     console.log("D");
// }

//Exercise3

// Prompt the user for a string. It must be a verb.
// If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
// If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
// If the length of the string is less than 3, leave it unchanged.

let verb = prompt("please write a verb");

let endIng = "ing";

let endLy = "ly";

if (verb.length >= 3 && verb.endsWith(endIng)) {
   console.log(`${verb}ly`); 
} else if (verb.length >= 3 && verb !== verb.endsWith(endIng)) {
    console.log(`${verb}ing`);
} else {
    console.log(verb);
}

