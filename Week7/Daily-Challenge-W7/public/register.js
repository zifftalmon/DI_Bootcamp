const register = (e) => {
    e.preventDefault();
    const firstName = e.target.fName.value
    const lastName = e.target.lName.value
    const email = e.target.email.value
    const userName = e.target.userName.value
    const password = e.target.password.value

    fetch('/register', {
        method: 'post',
        body: JSON.stringify({firstName,lastName,email,userName,password}),
        headers:{
            'content-type':'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        const root = document.getElementById("root")
        root.innerText = data.msg
    })
    .catch(err => {
        root.innerText = 'username or password already exist';
    }) 
}