let sentence = "shoes are not a bad thing";
const wordNot = sentence.indexOf('not');
const wordBad = sentence.indexOf('bad');

let subs;
if (wordBad > wordNot) { 
    subs = sentence.substring(wordNot,wordBad+3);
    sentence = sentence.replace(subs, 'good');
    console.log(sentence);
} else {
    console.log (sentence);
}
