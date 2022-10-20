//Exercise 1

// Write code to remove “Greg” from the people array.

// Write code to replace “James” to “Jason”.

// Write code to add your name to the end of the people array.

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?

// Create a variable called last which value is the last element of the array.
// // Hint: What is the relationship between the index of the last element in the array and the length of the array?

// const people = ["Greg", "Mary", "Devon", "James"];

// people.shift();
// console.log(people);

// people.splice(2, 1, "Jason");
// console.log(people);

// people.push("Ziv");
// console.log(people);

// let maryIndex= people.indexOf("Mary");
// console.log(maryIndex);

// let peopleCopy = people.slice(1,3);
// console.log(peopleCopy);

// let fooIndex = people.indexOf("Foo");
// console.log(fooIndex);

// let last = people.length;
// console.log(last - 1);

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);

//     if (people[i] == "Jason") {
//         break;
//     }
// };

//Exercise 2 

// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

let colors = ["red", "blue", "black", "green", "purple"];
let numbers = [1,2,3,4,5,6];
let suffixes = ["st", "nd", "rd", "th", "th"];
{
for (let i = 0; i < Number.length; i++)
for (let i = 0; i < colors.length; i++)
for (let i = 0; i < suffixes.length; i++) {

 
    if (numbers[i] == 1 && suffixes[i] == suffixes[0]) {
    console.log(`My ${numbers[i]}${suffixes[i]} choice is ${colors[i]}`);
    } else if (numbers[i] == 2 && suffixes[i] == suffixes[1]) {
        console.log(`My ${numbers[i]}${suffixes[i]} choice is ${colors[i]}`);
    } else if (numbers[i] == 3 && suffixes[i] == suffixes[2]) {
        console.log(`My ${numbers[i]}${suffixes[i]} choice is ${colors[i]}`);
    } else if (numbers[i] == 4 && suffixes[i] == suffixes[3]) {
        console.log(`My ${numbers[i]}${suffixes[i]} choice is ${colors[i]}`);
    } else {
        console.log(`My ${numbers[i]}${suffixes[i]} choice is ${colors[i]}`);
    }

}
}