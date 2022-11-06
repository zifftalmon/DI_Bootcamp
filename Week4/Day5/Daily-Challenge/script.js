function ifAnagram(stringOne,stringTwo) {
    return (
        stringOne.toLowerCase().replace(/ /g, "").split("").sort().toString() === 
        stringTwo.toLowerCase().replace(/ /g, "").split("").sort().toString() 
    );
}
console.log(ifAnagram("late","tale"));