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
// const numbers = numStr.substring(0);
// const sum = numbers.split(',');
// console.log(sum);


//Exercise 3

// const userSentence = prompt('Write a sentence containing the word \"Nemo\" please');

// const word = "Nemo".toLowerCase();

// const wordPosition = userSentence.indexOf("Nemo".toLowerCase());


// 	if (word == userSentence.match(word)) {
// 		console.log ("I found Nemo at " + wordPosition);
// 	} else {
// 		console.log ('I can\'t find Nemo.');
// 	}

//Exercise 4

const oNum = prompt('Enter a Number'); 

const word = 'boom'

const letter = 'o'.repeat(oNum);


if (oNum <= 2) {
    console.log(word);
} else if ((oNum > 2) && (oNum%2==0)){                                                                                               
    console.log('b' + letter + 'm!');
} else if (oNum%5==0){
    console.log('B' + (letter.toUpperCase()) + 'M');
} else if ((oNum%2==0)&(oNum%5==0)) { 
    console.log('B' + (letter.toUpperCase()) + 'M!');
} else {
    console.log('mooooooo!');
}
