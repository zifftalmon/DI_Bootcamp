let tr1 = document.getElementById('tr1')
tr1.firstElementChild.style.backgroundColor = 'red'

let tr2 = document.getElementById('tr2')
tr2.firstElementChild.nextElementSibling.style.backgroundColor = 'red'

let tr3 = document.getElementById('tr3')
tr3.firstElementChild.nextElementSibling.nextElementSibling.style.backgroundColor = 'red'

let tr4 = document.getElementById('tr4')
tr4.lastElementChild.previousElementSibling.style.backgroundColor = 'red'

let tr5 = document.getElementById('tr5')
tr5.lastElementChild.style.backgroundColor = 'red'