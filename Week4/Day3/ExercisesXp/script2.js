const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


let welcomeStudent = [];

users.map(element => {
    return welcomeStudent.push(`Hello ${element.firstName}`);    
})

console.log(welcomeStudent);

let fullStackers = users.filter(element => element.role == "Full Stack Resident");

let fullStackLastNames =[];

fullStackers.map(element => {
    return fullStackLastNames.push(element.lastName);   
})

console.log(fullStackLastNames);


