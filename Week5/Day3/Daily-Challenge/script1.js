function makeAllCaps (wordArr) {
    const CheckWords = new Promise ((resolve, reject) => {
        wordArr.forEach(element => {
            if (typeof element === "string") {
             resolve (wordArr);    
            } else {
             reject ("Not a String in the Array")
            }
        });
    })
    return CheckWords
    .then(res => res.map((element => {
        return element.toUpperCase();
    })))
    .then(sortRes => sortWords(sortRes))
    .catch((error) => console.log(error));
}
makeAllCaps(["fish", "man", "guy","sun","gun"])

function sortWords (arr) {
    const checkNumber = new Promise ((resolve, reject) => {
        if (arr.length >= 4) {
            resolve (arr);
        } else {
            reject ("Array Too Short");
        }
    })
    return checkNumber
    .then(sortedRes => console.log(sortedRes.sort()))
    .catch((error) => console.log(error));
}
