//exercise 1
let isBlank = (string) => {
    if (string === " ") {
        return true
    } else {
        return false
    }
}

console.log(isBlank(" "));

//exercise 2

let abbrevName = (firstName, lastName) => {
    if (lastName) {
        return `${firstName} ${lastName[0].toUpperCase()}.`;
    }
}

console.log(abbrevName("henry", "williams"))

