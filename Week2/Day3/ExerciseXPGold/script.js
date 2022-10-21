//Exercise 1

// let numbers = [123, 8409, 100053, 333333333, 7];

// for (let i of numbers) {
//     if (i%3 == 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }


//Exercise 2



// let guestList = {
//     randy: "Germany",
//     karla: "France",
//     wendy: "Japan",
//     norman: "England",
//     sam: "Argentina"
//   }
//   let student = prompt("what is your name?");

//   if (student in guestList === true) {
//     console.log(`Hi! I'm, ${student} and I'm from ${guestList[student]}.`);
//   } else {
//     console.log (`Hi! I'm a guest.`);
//   } 

  /*
  i reached the solution accidentaly, when trying to make the log show the desired sentence
  ,i tried referencing with bracket notation, however this would not show as expected,
  and then i thought "maybe if i put the student variable here with template literal and index of student it would solve the problem"
  instead, it showed me the value of the key, and then i tried writing just the variable, and it worked, while writing this i understood that the reason that
  the value of the key appears when i write $guestList[student] is because it looks for the value of the student
  string inputted to the prompt
  */

  //Exercise 3

  let age = [20,5,12,43,98,55];

  let sum = 0;

  let oldest = 0;

  for (let i = 0; i < age.length; i++) {
    sum += age[i]
    if (age[i] > oldest) {
        oldest = age[i]
    }
  }



  console.log(sum);
  console.log(oldest);