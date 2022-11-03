/*
Using the code above, destructure the parameter
 inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'
*/


function displayStudentInfo({first, last}){
    console.log(`your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});