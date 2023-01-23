const sum = document.getElementById('sum')
const numArr = []
let numArr1 = []
const numArr2 = []
const oprArr = []

const number = (num) => {
    numArr1.push(num)
    sum.value = numArr1.join('')
    if(numArr1 !== []) {
        numArr.push([...numArr1])
        sum.value = numArr.join('')
        numArr1 = []
    }
    numArr2.push(num)
}

const operator = (opr) => {
    oprArr.push(opr)
    if(oprArr !== []) {
        oprArr.shift()
        oprArr.pop()
        oprArr.push(opr)
    }
    sum.value += opr
    if(sum.value.includes(opr)) {
        sum.value += numArr2.join('')
    }
}
console.log(sum.value);


const equal = () => {
    const result = eval(sum.value)
    sum.value = result
}

