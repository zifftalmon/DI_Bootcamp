//Exercise1

// let x = 10;
// let y = 6; 

// if (x > y) {
//     alert("x is the biggest number");
// } else {
//     alert ("y is the biggest number")
// }

//Exercise2 

// let newDog = "Chihuahua";

// console.log(newDog.split("").length);
// console.log(newDog.toUpperCase());
// console.log(newDog.toLowerCase());

// if (newDog == "Chihuahua") {
//     alert("I love Chihuahuas, it\’\s my favorite dog breed");
// } else {
//     alert("I dont care, I prefer cats");
// }

//Exercise3

// const number = prompt("enter a number");

// if (number % 2 == 0) {
//     alert("x is an even number");
// } else {
//     alert("x is an odd number");
// }

//Exercise4

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

const usersLeft = users.splice(2,2);
if (users.length == 1) {
    console.log(users[0]);
} else if (users.length >= 2) {
    console.log(`${users[0]} ${users[1]} and ${usersLeft.length} more are online`);
} else {
    console.log("no one is online");
}
