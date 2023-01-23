const sum = document.getElementById('sum')
const numArr = []
const oprArr = []
console.log(sum);

const number = (num) => {
    numArr.push(num)
    console.log(numArr);
    sum.value = numArr.join('')
}

const operator = (opr) => {
    oprArr.push(opr)
    if(oprArr !== []) {
        oprArr.pop()
        oprArr.push(opr)
    }
    console.log(oprArr);
}

const equal = (a,opr,b) => {
    a+opr+b
}

