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
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

const people = ["Greg", "Mary", "Devon", "James"];

people.shift();
console.log(people);

people.splice(2, 1, "Jason");
console.log(people);

people.push("Ziv");
console.log(people);

let maryIndex= people.indexOf("Mary");
console.log(maryIndex);

let peopleCopy = people.slice(1,3);
console.log(peopleCopy);

let fooIndex = people.indexOf("Foo");
console.log(fooIndex);

let last = people.length;
console.log(last - 1);

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);

    if (people[i] == "Jason") {
        break;
    }
}

