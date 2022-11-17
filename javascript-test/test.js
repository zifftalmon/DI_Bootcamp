// 1
// const nums = [3,7,10]

// nums[1]


//2
// const arrNums = [1, 2, 3, 4, 5];

// arrNum.splice(2,0) = [1,2,3,4,5]


// 3
// const bestNumbers = [1, 2, 3]
//     const secondBestNumbers = [7, 8, 9]
    
//     const favoriteNumbers = [4, 5, 6, ...bestNumbers, ...secondBestNumbers];
//     console.log(favoriteNumbers)

    // [4,5,6,1,2,3,7,8,9]


//4
// const football = {
//     type: "sport",
//     clubs: {
//       france : "Paris Saint-Germain",
//       spain : "Atlético Madrid",
//     }
//   }  
  
//   football.clubs.spain = "Real Madrid";
//   console.log(football.clubs.spain);

// console would print:
//   'Real Madrid'


//5
// const myteam = "bestTeam";
   
// const football = {
//   type: "sport",
//   clubs: {
//     france : "Paris Saint-Germain",
//     spain : "Atlético Madrid",
//   }
// }  

// football.clubs[myteam] = "France national football team";
// console.log(football.clubs);

// console would print:
//     france : "Paris Saint-Germain",
//     spain : "Atlético Madrid",
//     bestTeam : "France national football team"


//6
// const x = function(a, b){
//     return a*b;
//  }


// we can define the function, it is called a function expression, 
// we invoke it with the following syntx:
// x(2,3) returns 6


//7
// they are global because in the added example the variable inside the function would
//affect the global code when a is used in other places in the code


//8
// function sayHello() {
//     return "Hello, ";
//  }
//  function greeting(helloMessage, name) {
//    console.log(helloMessage() + name);
//  }
//  greeting(sayHello, "JavaScript!");

// the code returns:
//hello javscript

//9
// non-arrow function
// function sum(num1, num2){
//     return num1 + num2
// }

// sum(40,2)
// sum(42,0)
// console.log("the answer to everything is", sum(42,0))

// arrow function
//  const sum = (num1, num2) => {
//     return num1 + num2
//  }

 
// sum(40,2)
// sum(42,0)
// console.log("the answer to everything is", sum(42,0))


//10
// function foo () {
//     function bar() {
//       return "Poppin' bottles";
//     }
//     return bar();
//   }
  
//   console.log(foo());

// the following code prints 'Poppin' bottles' to the console because the foo function returns
//the bar function, which returns the string 'Poppin' bottles', hence, invoking the foo function returns this log


// 11
// Which of the following events will you add in the `addEventListener()`method? 
//       ☐ click
//       ☐ onclick

// click

//12
// Does the `addEventListener()` method allow you to add many events to the same element?

//     ```javascript
//     x.addEventListener("mouseover", func1);
//     x.addEventListener("click", func2);
//     x.addEventListener("mouseout", func3);`

//yes

//13
// const button = document.getElementById("newPara")
// console.log(button);
// const body = document.body

// const addPara = () => {
//     let para = document.createElement("p");
//     para.innerText = "New Paragraph";
//     body.append(para);
//     const toRed = () => {
//         para.style.color = "red"
//     }
//     para.addEventListener("mouseover",toRed)
// }

// button.addEventListener("click", addPara)


//14
// const marks = [67, 60, 89, 90, 67, 42];

// let result = 0;

// for (let i = 0; i < marks.length; i++) {
//     result += marks[i]
// }
// console.log(result);

// for (let mark of marks) {
//     result += mark
// }
// console.log(result);


//15
// const marks = [67, 60, 89, 90, 67, 42];
//  passed = false, because not every element is grater than or equal to 50 


//16
// const nums = [10, 50, 88];

// const bignums = nums.filter(function(n) {
//    return n > 10;
// });

// console.log(bignums);

// bigNums = [50, 88]


//17
// const input = [ 1, 2, 3, 4, 5 ];

// input.forEach((element => {
//     console.log(element**2)
// }))


//18
// const secondInput = [ 1, -4, 12, 0, -3, 29, -150];

// const positiveNum = secondInput.filter((element) => {
//     return element > 0 
// })
// const sum = positiveNum.reduce(
//     (accumolator, currentValue) => accumolator + currentValue, 
//     0,
// );

// console.log(sum);


//19
// const input = 'George Raymond Richard Martin';

// const inputArr = input.split(" ")

// const initialLetter = inputArr.map((element => {
//      return element[0];
// }))

// const initials = initialLetter.join("");

// console.log(initials);


//20

// function changeTshirt (myshirt){
//     console.log("myshirt", myshirt);
//     myshirt.color = "red"
//     console.log("myshirt", myshirt); //this is the parameter
//     console.log("tshirt", tshirt);   //this is the global variable
// }


// const tshirt = {
//     color : "blue",
//     price : 10
// }

// changeTshirt(tshirt)


// object are passed by reference to functions, in the code we can see that the line
// myshirt.color = "red"
// changes the value fo the key color, this affects the tshirt object which is outside the function, because they are referencing
//  to the same adress in the H.E.A.P  


// 21
// you could declarea another variable inside the function and assign it a value of "red"
//then, assign this variable as the value of myshirt.color, because the variable would be function-scoped it would not
// affect the global code


//22
// const football = {
//     type: "sport",
//     clubs: {
//       france : "Paris Saint-Germain",
//       spain : "Atlético Madrid",
//     }
//   }  

// const {clubs: {france, spain}} = football

// console.log(france);
// console.log(spain);


//23

// function retrieveSports () {
//     const sentence = `My favorite football teams are ${franceTeam} and ${spainTeam}`;
//     console.log(sentence);
//  }

//  const football = {
//      type: "sport",
//      clubs: {
//        france : "Paris Saint-Germain",
//        spain : "Atlético Madrid",
//      }
//    }  
//    const {clubs: {france, spain}} = football
  
//    const franceTeam = france
  
//    const spainTeam = spain

//  retrieveSports(football)


//24
// class Item {
//     constructor(nameProduct, priceProduct) { 
//           this.name = nameProduct;
//           this.price = priceProduct;
//     }

//     displayInfo () {
//          console.log(this.name + " is for $ " + this.price)
//     }
//  } 

//  const cake = new Item("Chocolate Cake", 10);
//  cake.displayInfo();

// the cosole would display "Chocolate Cake is for $10"


//25
// Promise.resolve('Success!')
//       .then(data => {
//         return data.toUpperCase()
//       })
//       .then(data => {
//         console.log(data)
//       })

// the output will be SUCCESS! becuase the promise is resolved immediatley
// and then torned to uppercase


// 26
// const p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//        resolve("OK");
//     }, 2000);
//  });
 
//  p.then().then(function(data) {
//     console.log(data);
//  });

// following code would display SUCCESS! OK after 2 seconds


// 27
// async function test() {
//     let result = 'first!';
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve('done!'), 1000);
//     });
  
//     result = await promise;
  
//     console.log(result);
//   }
  
//   test();

// first, the promise would be resolved, and the string 'done' would be displayed because the result is
//awaiting for the promise

//28

// const catButton = document.getElementById("catBtn")

// const body = document.body

// async function fetchCat () {
//     try {
//         const request = await fetch("https://catfact.ninja/fact")
//         const resp = await request.json()
//         catButton.addEventListener("click",addFact)
//         function addFact(e) {
//             const para = document.createElement("p");
//             para.innerText = resp.fact
//             body.append(para)
//         }
//     }catch(Error){
//         console.log('No fact Found, Try again later', Error);
//     }

// }
// fetchCat();