const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

async function arrOfPromises () {
    try {
const allPromises = Promise.all([promise1,promise2,promise3])
const resultArr = await allPromises;
console.log(resultArr);
    }catch(Error) {
        console.log("something wrong with promise", Error);
    }
}

arrOfPromises();

/*PROMISE ALL ACCEPTS AN ARRAY OF APROMISES AND ITERATES THROUGH IT, RETURNING
AND ARRAY OF FULLFILLED VALUES. THE REASON THE OUTPUT IS [3, 42, FOO] AFTER 3 SECONDS
IS BECAUSE ALL THE PROMISES ARE RESOLVED ONLY AFTER THE SETTIMOUT ENDS, EVEN IF THE FIRST
TWO PROMISES ARE ALREADY FULFILLED, PROMISES.ALL WORKS IN A WAY THAT REQUIRES ALL THE PROMISES TO BR ITERATED,
AND OLNY AFTER THAT RETURNS AN ARRAY 
*/