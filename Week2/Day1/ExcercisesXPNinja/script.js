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

const numStr = window.prompt('write a string of numbers separated by commas please');

console.log(numStr.split(',').join(''));
