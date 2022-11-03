//Exercise 1

// Create two objects, each object should hold a person’s details. Here are the details:
// FullName
// Mass
// Height

// Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

// Outside of the objects, create a JS function that compares the BMI of both objects.

// Display the name of the person who has the largest BMI.


// function bmi(a,b) {
//     return a / Math.pow(b,2);
// }

// const person1 = {
//     FullName: "david hasselhof",
//     Mass: 90,
//     Height: 1.80,
//     Bmi: bmi (90, 1.80),
// }

// const person2 = {
//     FullName: "gary hasselhof",
//     Mass: 110,
//     Height: 1.40,
//     Bmi: bmi(110,1.40),
// }

// function comparison () {
//     let bmiNum = Math.max(bmi1,bmi2)
//     return bmiNum;
// }

// let bmi1 = person1.Bmi;

// let bmi2 = person2.Bmi;

// let bigger = comparison();

// console.log(bigger);

/*this challenge was hand-bending because, on the surface, it seemed simple to me,
simply place a function in each object, thus i decided to create two seperate function, this led to
a mess of too many functions, and wasn't very practical for the end function which had to use the value
of the bmi propertey, after learning a bit more about functions i realized the most efficient thing to do is
to create one function in the global scope, utilize it in the bmi propertey of both the function and use that value in the 
comparison function
*/

// Using the .toString() method convert the array to a string.
// Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)
// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.
// Requirement: Don’t copy paste solutions from Google




const numbers = [5,0,9,1,7,4,2,6,3,8].join(" ");

let numberStr = numbers.toString();

console.log(numbers);

console.log(numberStr)

let x;

function sorter () {

for (let i = 0; i < numbers.length; i++) {
    for(let j = i+1; j < numbers.length; j++) {
        if (numbers[i] < numbers[j]) {
            x = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = x;
            console.log(numbers[j]);
        }

    }
}
return numbers;
}
const newArr = sorter(numbers)
console.log(numbers);