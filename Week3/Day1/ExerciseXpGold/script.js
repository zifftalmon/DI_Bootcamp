let td = document.getElementsByClassName('redTd')
let tdArr = Array.from(td)
tdArr.map(item => {
    item.style.backgroundColor = 'red'
})