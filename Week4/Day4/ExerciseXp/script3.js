// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const users = { user1: 18273, user2: 92833, user3: 90315 };

let userArr = Object.entries(users);

console.log(userArr);

userArr.forEach(element => (element[1] *= 2));

/*
I was a bit usure for the second part of this exercise since i knew i had to use the array
i created in the first part but i wasn't sure how to maniulate it, i tried
using different array methods including foreach before realizing i had to return
and NOT log to the console fo rthe changes i made on the elements to take place and appear
*/