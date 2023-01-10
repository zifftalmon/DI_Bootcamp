// //exercise 1
// let isBlank = (string) => {
//     if (string === " ") {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isBlank(" "));

// //exercise 2

// let abbrevName = (firstName, lastName) => {
//     if (lastName) {
//         return `${firstName} ${lastName[0].toUpperCase()}.`;
//     }
// }

// console.log(abbrevName("henry", "williams"))

//exercise 3
// let sentence = " ";

// let switchCase = (input) => {
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] === input[i].toLowerCase()) {
//             sentence += input[i].toUpperCase();
//         } else {
//             sentence += input[i].toLowerCase();
//         }
//     }
//     console.log(sentence);
//     return sentence;
// }
// switchCase("How aRE We ToDAy");

// exercise 4 
const numbers = [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]

const isOmniPresent = (arr,tester) => {
    arr.every(item => {
        console.log(item.includes(tester))
    })
}

isOmniPresent(numbers,3)

