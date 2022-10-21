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



let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }
  let student = prompt("what is your name?");

  if (student in guestList === true) {
    console.log(`Hi! I'm, ${student} and I'm from ${guestList[student]}.`);
  } else {
    console.log (`Hi! I'm a guest.`);
  } 

  /*
  i reached the solution accidentaly
  */