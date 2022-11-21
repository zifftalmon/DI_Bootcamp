async function getUser () {
    const call = await fetch('http://localhost:3000/home')
    const user = await call.json();
    console.log(user);
    addUser(user.user);
}
getUser();

function addUser (obj) {
    const user = JSON.stringify(obj);
    let div = document.getElementById("userInfo")
    div.innerText = user
    console.log(user);
}