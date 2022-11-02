//Exercise 1

// Create two objects, each object should hold a person’s details. Here are the details:
// FullName
// Mass
// Height

// Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

// Outside of the objects, create a JS function that compares the BMI of both objects.

// Display the name of the person who has the largest BMI.


function bmi(a,b) {
    return a / Math.pow(b,2);
}

const person1 = {
    FullName: "david hasselhof",
    Mass: 90,
    Height: 1.80,
    Bmi: bmi (90, 1.80),
}

const person2 = {
    FullName: "gary hasselhof",
    Mass: 110,
    Height: 1.40,
    Bmi: bmi(110,1.40),
}

function comparison () {
    let bmiNum = Math.max(bmi1,bmi2)
    return bmiNum;
}

let bmi1 = person1.Bmi;

let bmi2 = person2.Bmi;

let bigger = comparison();

console.log(bigger);

/*this challenge was hand-bending because, on the surface, it seemed simple to me,
simply place a function in each object, thus i decided to create two seperate function, this led to
a mess of too many functions, and wasn't very practical for the end function which had to use the value
of the bmi propertey, after learning a bit more about functions i realized the most efficient thing to do is
to create one function in the global scope, utilize it in the bmi propertey of both the function and use that value in the 
comparison function
*/