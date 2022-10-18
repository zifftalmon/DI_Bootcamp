//Exercise1

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift();

fruits.sort();

fruits.push('Kiwi');

fruits.splice(0,1);

fruits.reverse();

console.log(fruits);

//Exercise2

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// const oranges = moreFruits[1][1][0];

// console.log(oranges);

console.log(moreFruits[1][1][0]);
