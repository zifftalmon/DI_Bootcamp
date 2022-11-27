const login = (event) => {
    event.preventDefault();
    const username = event.target.userName.value;
    const password = event.target.password.value;

    fetch('/login', {
        method: 'post',
        body: JSON.stringify({username,password}),
        headers:{
            'content-type':'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        const root = document.getElementById("root")
        root.innerText = data.msg
    })
    .catch(e => {
        console.log(e);
    })
}