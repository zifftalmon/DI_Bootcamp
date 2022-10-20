const sentence = "shoes are not a bad thing".split(" ");
const wordNot = sentence[2];
const wordBad = sentence[4];
const goodArray = ["good"];

if (wordNot > wordBad) { 
    console.log(sentence.splice(0,2, goodArray).concat(goodArray));
} else {
    console.log (sentence.join(" "));
}

console.log()