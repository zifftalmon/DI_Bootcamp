//Excercise 1

5 >= 1 
//true because 5 is greater than 1
//true
0 === 1
//false because 0 is not equal to 1
//false
4 <= 1
//true because 1 is less than 4
//false
1 != 1
//false because 1 IS equal to 1
//false
"A" > "B"
//false because by binary oorder, B is greater than A
//false
"B" < "C"
//false because by binary order, C is Greater than B
//true
"a" > "A"
//true because by binary order a is greater than A
//true
"b" < "A"
//true because by binary order a is greater than A
//true
true === false
//true because boolean are of the same type
//false
true != true
//false because true IS equal to true
//false

//Excercise 2

// const numStr = prompt('write a string of numbers separated by commas please');
// const numbersArr = numStr.split(',');
// let sum = 0;
// for (let i=0; i < numbersArr.length; i++) {
//     sum += Number(numbersArr[i]);
// }
// console.log(sum);

/*while i was working on this problem i talked with my cousin who is also a programmer about the way this problem was presented, hw advised that i will try to use a for loop
i read about the excat way for loops works, reading its components out loud, what each expression does, saw multiple examples, once i felt
comfortable trying out and testing this concept to achive a solution, i stumbled upon some difficulties, however after trying different variations on the formula, i found a solution and undestood butter the
functionalify of the loop, the differences and beahviors of strings and array, differnt string and array methods, and better reading of errors. and percervirence, this was a tricky one for me
*/

// Exercise 3

let userSentence = prompt('Write a sentence containing the word \"Nemo\" please');

const userArray = userSentence.split(" ");

const word = "Nemo".toLowerCase();

const wordPosition = userArray.indexOf("Nemo".toLowerCase());


	if (word == userSentence.match(word)) {
		console.log ("I found Nemo at " + wordPosition);
	} else {
		console.log ('I can\'t find Nemo.');
	}

// Exercise 4

// const oNum = prompt('Enter a Number'); 

// const word = 'boom'

// const letter = 'o'.repeat(oNum);


// if (oNum <= 2) {
//     console.log(word);
// } else if ((oNum > 2) && (oNum%2==0)){                                                                                               
//     console.log('b' + letter + 'm!');
// } else if (oNum%5==0){
//     console.log('B' + (letter.toUpperCase()) + 'M');
// } else if ((oNum%2==0)&(oNum%5==0)) { 
//     console.log('B' + (letter.toUpperCase()) + 'M!');
// } else {
//     console.log('mooooooo!');
// }
