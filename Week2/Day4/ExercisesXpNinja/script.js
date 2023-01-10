//exercise 1

// const num = Math.floor(Math.random() * 100)

// for(let i = 0; i < num; i++) {
//     console.log(i);
// }

//exercise 2

// const capitalize = (string) => {
//     const stringArr = string.split('')
//      const map = stringArr.map((item,i) => {
//         if(i % 2 === 0) {
//             return item
//         } else {
//             return item.toUpperCase()
//         }
//     }) 
//     console.log(map.join(''));
// }
// capitalize('hola')

// exercise 3

// const isPelindrome = (string) => {
//     const reverseString = string.split('').reverse().join('')
//     if(reverseString === string) {
//         console.log(true);
//     }else {
//         console.log(false);
//     }
// }

// isPelindrome('can')

//exercise 4

// const biggestNumber = (arr) => {
//     if(arr.length === 0) {
//         console.log(0);
//     }else{
//         const filter = arr.filter(item => {
//             return typeof item == 'number'
//         })
//         const number = Math.max(...filter)
//         console.log(number);
//     }
// }

// biggestNumber([1,2,'r',5])