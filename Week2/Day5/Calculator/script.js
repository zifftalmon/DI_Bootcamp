const sum = document.getElementById('sum')
const resultArr = []
let numArr = []
let numArr1 = []
const oprArr = []

const number = (num) => {
    numArr1.push(num)
    if(numArr1 !== []) {
        numArr.push([...numArr1])
        sum.value = numArr.join('')
        numArr1 = []
    }
}

const operator = (opr) => {
    oprArr.push(opr)
    if(oprArr !== []) {
        oprArr.shift()
        oprArr.pop()
        oprArr.push(opr)
    }
    numArr.push(...oprArr)
    sum.value += oprArr
    sum.value += numArr1
}

const equal = () => {
    const result = eval(sum.value)
    numArr = [result]
    sum.value = result
}

