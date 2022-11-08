const resolvedPromise = new Promise ((resolve, reject) => {
    resolve (3);
})

resolvedPromise
.then(res => console.log(res))
.catch(err => console.log(`something is wrong ${err}`))

const rejectedPromise = new Promise ((resolve,reject) => {
    reject ("boo");
})

rejectedPromise
.then(res => console.log(res))
.catch(err => console.log(`i dont like errors ${err}`));