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

// let colors = ["red", "blue", "black", "green", "purple"];
// let numbers = [1,2,3,4,5,6];
// let suffixes = ["st", "nd", "rd", "th", "th"];

// for (let i = 0; i < Number.length; i++){
    
// for (let i = 0; i < colors.length; i++){
//     if (numbers[i] == 1 && suffixes[i] == suffixes[0]) {
//         console.log(`My ${numbers[i]}${suffixes[i]} choice is ${colors[i]}`);
//         } else if (numbers[i] == 2 && suffixes[i] == suffixes[1]) {
//             console.log(`My ${numbers[i]}${suffixes[i]} choice is ${colors[i]}`);
//         } else if (numbers[i] == 3 && suffixes[i] == suffixes[2]) {
//             console.log(`My ${numbers[i]}${suffixes[i]} choice is ${colors[i]}`);
//         } else if (numbers[i] == 4 && suffixes[i] == suffixes[3]) {
//             console.log(`My ${numbers[i]}${suffixes[i]} choice is ${colors[i]}`);
//         } else {
//             console.log(`My ${numbers[i]}${suffixes[i]} choice is ${colors[i]}`);
//         } 
// for (let i = 0; i < suffixes.length; i++){    
// }
// } 
// }
    /*
    by reading and exercising nesting loops i managed to better undestand how to change the code
    in order for the final log to show just once
    */

//exercise 3 

// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

// let number = Number(prompt("Enter a number Please"));


// while (number < 10){
// number = prompt("Enter a Number Please");
//     if (number >= 10) 
//     break;
// }

/*
i struggled with this problem, to solve it i realized i need a nested while loop, but then trying to assign an action that re asks the question without malfunctioning the 
loop was difficult, when i would prompt another message, after a few iterations the loop would behave abnormally, after which if i would
input a number higher than 10 the prompt window would still appear.
i then tried to reinitiate the number varialbe inside of the loop as it's action, this manage to 
solve the problem so that the loop would behave as desired, since re-initiating the number when it's bound to the condition
made it engage the prompt in the desired manner
*/

//Exercise 4 

// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.

// Console.log how many apartments are on the floors 1 and 3.

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.


// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// let name1 = building["nameOfTenants"][0];
// let name2 = building["nameOfTenants"][1];
// let name3 = building["nameOfTenants"][2];

// console.log(building["numberOfFloors"]);
// console.log(building["numberOfAptByFloor"]["firstFloor"],building["numberOfAptByFloor"]["thirdFloor"])
// console.log(building["nameOfTenants"][1],building());

// if (building["numberOfRoomsAndRent"]["sarah"][1]
//  + building["numberOfRoomsAndRent"]["david"][1] > building["numberOfRoomsAndRent"]["dan"][0]) {
//     building["numberOfRoomsAndRent"]["dan"][1] = 1200;
//  } else {
//     console.log(building["numberOfRoomsAndRent"]["dan"][0])
//  }

//  console.log(building["numberOfRoomsAndRent"]["dan"][1]);


//exercise 5

// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

// const family = {
//     mother: "ima",
//     father: "aba",
//     daughter: "michal",
//     daughter2: "talia",
//     daughter3: "shani",
//     son: "yoav",
//     daughter4: "roni",
// }

// for (let i in family) {
//     console.log(i);
// }
// for (let j in family) {
//     console.log(family[j]);
// }


//Exercise 6

// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }

//   for (let i in details) {
//     console.log(i, details[i]);
//   }

//Exercise 7 

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"].sort();

for (let i of names) {
    console.log(i[0]);
}

