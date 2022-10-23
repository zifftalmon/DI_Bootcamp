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

 function closeEnough (itemPrice, amountOfChange) {
    if (amountOfChange > itemPrice) {
        return true;
    } else {
        return false
    }
 }

 closeEnough(4.24, [25, 20, 5, 0]);