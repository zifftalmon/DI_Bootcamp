// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

//Exercise1

let dateOne = Number(prompt("enter your birth year"));

let dateTwo = Number(prompt("enter your sibling birth year"));

if (dateOne > dateTwo) {
    console.log(dateTwo + (dateOne - dateTwo) * 2);
} else if (dateOne < dateTwo) {
    console.log(dateOne + (dateTwo - dateOne) * 2);
}
