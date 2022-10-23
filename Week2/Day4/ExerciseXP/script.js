
//Exercise 1

// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")


// function infoAboutMe() {
//     console.log("Hi, my name is Ziv, i'm 22 years old, i love coding!")
// };
// infoAboutMe();

// function infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log(`Hi my name is ${personName} i'm ${personAge} years old, and my favorite color is ${personFavoriteColor}`);
// }
// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow")

//Exercise2

// John created a simple tip calculator to help calculate how much
//  to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

// Inside the function, use prompt to ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.

// function calculateTip() {
//     let bill = Number(prompt("How much is the bill?"));
//     if (bill < 50) {
//         return bill * 0.2;
//     } else if (bill > 50 && bill < 200) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.1;
//     }
// }
// let finalBill = calculateTip();
// console.log(finalBill);

//Exercise3

// Exercise 3 : Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// function isDivisible(){
//     let sum = 0;
//     for (let i = 0; i < 500; i++) {
//         if(i % 23 == 0) {
//             sum += i;
//             console.log(i, sum);  
//         }
//     }
// }
// isDivisible();

// Bonus: Add a parameter divisor to the function.

// function isDivisible(divisor){
//     let sum = 0;
//     for (let i = 0; i < 500; i++) {
//         if(i % divisor == 0) {
//             sum += i;
//             console.log(i, sum);  
//         }
//     }
// }
// isDivisible(5);


//Exercise4

// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items:
//  “banana”, “orange”, and “apple”.
//  It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1


// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 
// const shoppingList = ["banana", "orange", "apple"];

// function myBill() {
//     let sum = 0;
//     for (let i = 0; i < shoppingList.length; i++){
//         if(shoppingList[i] in stock)
//          sum += prices[shoppingList[i]]; 
//     }
//     return  sum;
// }


// let bill = myBill();
// console.log(bill);

/*
this exercise was very challneging, i had trouble figuring out the order in which the different statements and loops
were needed to be placed, my first variation was : no sum variable,first the for loop, enclosing the if..in statement which had an else statement and the return statement,
this led to the loop running and outputting only the vlaue of the property "banana" from the proces object, only after consulting a fellow progarammer and searching
the web i realized i need another variable of sum assigned with zero to re-assign with the sum of the prices of the shoppinList, and enclosing the if..in statement with the re-assigning
of sum inside the loop, leacing the return statement in the scope of the function, that way, the loop goes over the shoppingList, then, checks if the content of the shoppingList
is in stock, and then, sums the prices of those items and returns them added to each other 
*/

//Exercise 5

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.

//  function closeEnough (itemPrice, amountOfChange) {
//     let change = [0.25, 0.10, 0.05, 0.01];
//     let sum = 0;
//     for (let i = 0; i < amountOfChange.length; i++){  
//     sum += amountOfChange[i] * change[i];
//     }
//     if (itemPrice < sum) {
//         return true;
//     } else {
//         return false;
//     }
    
// }
//  let price = closeEnough(14.11, [2,100,0,0]);
//  console.log(price);

 /*
 the way i tries to solve this exercise at first was to use two loops, one to loop over the amountOfChange and the over to loop over
 thechange array, and then multiply each array by the other, problem was, no loop was closing the claculations, as well as having two loops
 led to them multiplying each others' content leading to undisered function returns, in the end what solved the problem was removing one loop
 because the arrays which are being looped are the same length, thus using the i variable works for both amountOfChange & change arrays
 */



//  Exercise 6

// function hotelCost () {
//     let numberOfNights = prompt("How many nights would you like to stay?");
//    while (numberOfNights == "" || numberOfNights !== NaN) {
//        numberOfNights = prompt("How many nights would you like tx`o stay?");
//        if (numberOfNights > 0)
//        break;
//        } return 140 * numberOfNights;
// }
// let nightCost = hotelCost();
// console.log(nightCost);  

/*
to solve this exercise i realize i'd need a function, with some kind of loop nested inside. i tried using a for loop but realize that this will
require an end condition and won't be very useful to repeat a question again and again, i remembered we had a similar exercise on day 3,
which asks a question and while the number is smaller than 10, the question is asked again and again, i decided using a while loop, this helped but at 
first would not react to any input, to solve this, i tries to change the type of the input to number, this didn't help either since inputting a string in a number 
wrapper logs NaN, which is also a type number, and this returned NaN. finally, i tried changing the consition to (!== NaN) so it will promptthe question again, and changed the if statement's
considition to (> 0) so that only numbers above 0 and not NaN will get multiplied by 140 and return the cost of the hotel
*/


// function planeRideCost() {
// let destination = prompt("where do you want to fly?").toLowerCase();
//     while (destination == "" || destination.match("[0-9]+")) {
//         destination = prompt("where do you want to fly?").toLowerCase();
//     }
//         if (destination == "london") {
//             return "183$"
//         } else if (destination == "paris") {
//             return "220$"
//         } else {
//             return "300$"
//         }
// }


// let flightCost = planeRideCost();
// console.log(flightCost);

/*
the problem i faced in this exercise was to find a way to make sure the the question is prompted when a number is inputted, to solve this, i used the match method
to see if the prompt input contains any numbers
*/

// function rentalCarCost () {
// let numberOfDays = prompt("How many days will you be renting a car?");
//     while (numberOfDays == "" || numberOfDays !== NaN) {
//         numberOfDays = prompt("How many days will you be renting a car?");
//         if (numberOfDays > 0 && numberOfDays <= 10)
//         return 40 * numberOfDays;
//         else if (numberOfDays > 10)
//         return (40 * numberOfDays)-((40 * 0.05)*11)
//     }
//     }
// let carCost = rentalCarCost();
// console.log(carCost);

