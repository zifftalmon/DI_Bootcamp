//Exercise 1

const sentence = ["my","favorite","color","is","blue"];
console.log(sentence.join(''));   

//Exercise 2 
const str1 = "mix";
const str2 = "pod";

const newStr1 = str2.slice(0,2) + str1.slice(2);
const newStr2 = str1.slice(0,2) + str2.slice(2);
const newWord = `${newStr1} ${newStr2}`;
console.log(newStr1);
console.log(newStr2);
console.log(newWord);

//Excercise 3

const num1 = window.prompt('Enter a Number')-0;
const num2 = window.prompt('Enter a Second Number')-0;
alert(num1 + num2);
alert(num1 - num2);
alert(num1 / num2);
alert(num1 * num2);
