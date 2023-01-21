const button = document.getElementById('emailForm')[1]

// const validateEmail = (e) => {
//     const email = e.target.previousElementSibling.value

//     const invalid = 'email invalid'

//     const symbol1 = email.indexOf('@')
    
//     if(symbol1 < 1) return alert(`${invalid}, missing @`)

//     const symbol2 = email.indexOf('.')

//     if(symbol2 <= symbol1 + 2) return alert(`${invalid}, missing dot`)

//     if(symbol2 === email.length - 1) return alert(`${invalid}, dot cannot be at the end`)

//     alert('email is valid')
// }

const validateEmail = (e) => {
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const email = e.target.previousElementSibling.value

    if(email.match(valid)) {
        return alert('valid email') 
    }else{
        return alert('invalid email')
    }
}


button.addEventListener('click',validateEmail)