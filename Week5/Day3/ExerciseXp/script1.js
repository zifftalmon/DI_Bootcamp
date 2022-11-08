function compareToTen (num) {
   const numberPromise =  new Promise ((resolve, reject) => {
    if (num <= 10) {
        resolve(num)
    } else {
        reject (`wrong number ${num}`)
    }
}) 
return numberPromise
.then(res => console.log(res))
.catch(err => console.log(err));
}

compareToTen(11);