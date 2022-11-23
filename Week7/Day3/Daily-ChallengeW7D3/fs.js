const fs = require('fs')

const right = '>'

const left = '<'

fs.readFile('./RightLeft.txt', 'utf-8', (err,data) => {
    if(err) {
        console.log(err);
    }

    const dataArr = data.split("")
    let counter = 0;
    let minusArr = [];
    dataArr.map((element, index) => {
        if(element == right) {
            counter++
        }
        
        if(element == left) {
            counter--
        }

        if(counter == -1) {
            minusArr.push(index)
        }
    })
    console.log(dataArr);
    console.log(minusArr);
    console.log(`total steps: ${counter}`);
    console.log(`first time in left side: ${minusArr[0]} steps`);
})

//acoording to my check the first occurence of -1 is 1794, followed by 1796, and more after wards, 1795 is -2
