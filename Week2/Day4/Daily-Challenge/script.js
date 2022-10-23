let words = prompt("write a few words with commas").split(",");
function longestWord (){
    let max = 0;
    for (let i = 0; i < words.length; i++) {
        if(max < words[i].length){ 
            max = words[i].length;
        }
    } 
    return max;
}

function wordsFrame(words, max) {
    borderStars(max);
    for (let word of words) {
        console.log(`* ${word + " ".repeat(max - word.length)} *`);
    }
    borderStars(max);
}

function borderStars(max) {
    console.log("*".repeat(max + 4));
}

wordsFrame(words,longestWord());
