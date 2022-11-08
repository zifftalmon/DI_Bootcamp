function makeAllCaps (wordArr) {
    const CheckWords = new Promise ((resolve, reject) => {
        wordArr.forEach(element => {
            if (typeof element === "string") {
             resolve (wordArr);    
            }
        });
    })
    return CheckWords
    .then(res => res.map((element => {
        return element.toUpperCase();
    })))
    .then(capRes => console.log(capRes))
}
makeAllCaps(["sir", "man", "guy"])