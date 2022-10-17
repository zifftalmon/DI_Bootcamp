//Exercise 1

let sentence = ["my","favorite","color","is","blue"];
console.log(sentence.join(''));   

//Exercise 2 
let str1 = "mix";
let str2 = "pod";

let newStr1 = str2.slice(0,2) + str1.slice(2);
let newStr2 = str1.slice(0,2) + str2.slice(2);

let newWord = newStr1 + " " +  newStr2;
console.log(newStr1);
console.log(newStr2);
console.log(newWord);

//Excercise 3

let num1 = window.prompt('Enter a Number')-0;
let num2 = window.prompt('Enter a Second Number')-0;
alert(num1 + num2);
alert(num1 - num2);
alert(num1 / num2);
alert(num1 * num2);
