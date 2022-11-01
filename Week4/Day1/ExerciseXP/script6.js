let bankAmount = 2950;

const vat = 0.17;

let details = [+240, -50, +120, -1566, +3400];

details.forEach((number, i) => {
    details[i] += number * vat;
    console.log(details[i]);
    bankAmount += details[i];
})
console.log(bankAmount);