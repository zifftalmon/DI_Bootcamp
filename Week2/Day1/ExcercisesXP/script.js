
// Excercise 1
let favoriteFood = 'Scrambles Eggs';
let favoriteMeal = 'Breakfast';
let mealSentence = 'I eat ' + favoriteFood + ' at every ' + favoriteMeal;
console.log(mealSentence);

// Excercise 2
const myWatchedSeries = ['black mirror', 'money heist', 'the big bang theory'];
let myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength)

let myWatchedSeriesSentence = myWatchedSeries.toString();
console.log(myWatchedSeriesSentence);

let mySeriesSentence = 'I Watched ' + myWatchedSeriesLength + ' series : ' + myWatchedSeriesSentence;
console.log(mySeriesSentence);

let myWatchedSeries2 = myWatchedSeries.splice(2, 2, 'friends');
console.log(myWatchedSeries);

let myWatchedSeries3 = myWatchedSeries.push('breaking bad');
console.log(myWatchedSeries);

let myWatchedSeries4 = myWatchedSeries.unshift('fleabag');
console.log(myWatchedSeries);

let myWatchedSeries5 = myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);

let myLetter = myWatchedSeries[1].charAt(2);
console.log(myLetter);

// Excercise 3

function temperature(celsius) {
    fahrenheit = celsius / (5 * 9) + 32
    return fahrenheit
}
temperature(19);

// Excercise 4

let c;
let a = 34;
let b = 21;

console.log(a+b); //first expression
// Prediction: it will be 55 beacause  a(34) + b(21) is 55
// Actual: 55

a = 2;

console.log(a+b); //second expression
// Prediction: it will be 23 because a is changed to a value of 2, and 2 + 21(b) is 23
// Actual: 23

// c has no value

//the outcome of console.log(3 + 4 + '5') will be a string saying 75 

console.log(3 + 4 + '5');

// Excercise 5 

typeof(15)
// Prediction: number beacuse 15 is a type number
// Actual: number

typeof(5.5)
// Prediction: number because 5.5 is a type number
// Actual: number

typeof(NaN)
// Prediction: number because NaN is defines as a type number
// Actual: number

typeof("hello")
// Prediction: string because the writing are enclosed in parathesis
// Actual: string

typeof(true)
// Prediction: boolean beacuase true is on of two boolean values, true or false
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean because the outcome of the comparison will be true or false, which are type boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: string because concatenating two string produces one longer string
// Actual: string

"hamburgers" - "s"
// Prediction: number becuase decramenting two string produces a NaN which is a type number
// Actual: number

"1" + "3"
// Prediction: string because concatenating two string produces one longer string
// Actual: string

"1" - "3"
// Prediction: number becuase decramenting two string produces a NaN which is a type number
// Actual: number

"johnny" + 5
// Prediction: string because concatenating a string and a number produces a string
// Actual: string

"johnny" - 5
// Prediction: number becuase decramenting a string and a number produces a NaN which is a type number
// Actual: number

99 * "hello"
// Prediction: number becuase performing mathmetical operations on a number and a string produces a NaN which is a type number
// Actual: number

1 != 1
// Prediction:  boolean because the outcome of the comparison will be true or false, which are type boolean
// Actual: boolean

1 == "1"
// Prediction: boolean because the outcome of the comparison will be true or false, which are type boolean
// Actual: boolean

1 === "1"
// Prediction: boolean because the outcome of the comparison will be true or false, which are type boolean
// Actual: boolean

// Excercise 6

5 + "34"
// Prediction: 534 because the adding of a string and a number which is possible because when adding a number to a string the number is turned into a string
// Actual: 534

5 - "4"
// Prediction: NaN because decramenting a string and number produces NaN
// Actual: 1

10 % 5
// Prediction: 0 bause there is no remainder
// Actual: 0

5 % 10
// Prediction: 5 because 10 can go into five oly one time, and the remainder is 5
// Actual: 5

"Java" + "Script"
// Prediction: JavaScript because adding two string produces one string
// Actual: JavaScript

" " + " "
// Prediction: " "" " because adding two string produces one string
// Actual: blank

" " + 0
// Prediction: 0 because one string is empty and adding a number and a string produces a string
// Actual: 0

true + true
// Prediction: truetrue because by trying to add booleans they are turned into string
// Actual: 2

true + false
// Prediction: truefalse because by trying to add booleans they are turned in to string
// Actual: 1

false + true
// Prediction: falsetrue because by trying to add booleans they are turned in to string
// Actual:1

false - true
// Prediction: NaN because decramneting two booleans they are turned into strings and you cant perform certain mathmatical operations on strings
// Actual: -1

!true
// Prediction: false bacause exclomation mark before booleans produces their opposite 
// Actual: false

3 - 4
// Prediction: -1 bacause you can perform mathmatical operations on two numbers
// Actual: -1

"Bob" - "bill"
// Prediction: NaN because you cant perform certain mathmetical operations on strings
// Actual: NaN

console.log('Bob' - 'Bill');
