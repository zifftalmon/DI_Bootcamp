(function details(number, name, place, job) {
    let para = document.getElementById("sentence");
    let text = document.createTextNode(`You will be a ${job} in ${place}, and married to ${name} with ${number} kids`);
    para.append(text);
})(4, "john", "berlin", "butcher")