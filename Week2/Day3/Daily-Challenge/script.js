//STARS

// for (let i = " * "; i < 1; i++) {
//     console.log(i);
//   for(let j = 0; j < 1; j++) {
//     console.log(i,j);
//     for(let k = 0; k < 1; k++) {
//         console.log(i,j,k);
//         for(let l = 0; l < 1; l++) {
//             console.log(i,j,k,l);
//             for(let m = 0; m < 1; m++) {
//                 console.log(i,j,k,l,m);
//                 for(let n = 0; n < 1; n++) {
//                     console.log(i,j,k,l,m,n);
//                   }
//               }
//           }
//       }
//   }

// }

// const maximum = 6;
// let stars = "";
// for (let i = 0; i < maximum; i++) {
//     stars = stars + " * "
//     console.log(stars);
// }
/////////////////////////// CHECKER
// THE SALUTION WAS SUPPOSED TO LOOK SOMETHING LIKE THIS
// const max = 6;
// let stars = "";
// for(let index = 0; index < max; index++){
//     stars = stars + " * "
//     console.log(stars)
// }

//BUBBLE SORT
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




// const numbers = [5,0,9,1,7,4,2,6,3,8].join("").toString();

// for (let i = 0; i < numbers.length; i++) {
//     let i;
//     for (let j = 0; j < i; j++) {
//         if (numbers[i] > numbers[j]) {
//             let j = numbers[i]; 
//             numbers[j] = numbers[i] 
//             j = numbers[i]
//             console.log(j);
//         }
//     }
// }