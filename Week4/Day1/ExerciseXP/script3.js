let isString = (arg) => arg !==arg.toString() ? false : true;

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false
