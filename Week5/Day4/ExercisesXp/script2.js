function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//OUTCOME WILL BE CALLING AND THEN RESOLVED FROM THE RESOLVEDAFTER25SECOND FUNCTION
//BECAUSE THE CONSOLE.LOG OF CALLING IS BEFORE THE AWAIT