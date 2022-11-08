const resolvingPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve ("success")
    }, 2000)
});

resolvingPromise
.then(res => console.log(res))
.catch(err => console.log(`oops something went wrong ${err}`));