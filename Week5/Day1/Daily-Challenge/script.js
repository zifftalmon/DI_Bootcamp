let form = document.getElementById("frm");

let para = document.createElement("p");

form.append(para);

const formData = (e) => {
    e.preventDefault();
    const data = new FormData(form);

    let value = Object.fromEntries(data.entries());

    let valueString = JSON.stringify(value);

    para.append(valueString);
}

form.addEventListener("submit", formData);

/*
being as this is a new subject annd i was some what anxious about the entrance to the 
world of clients and servers, this was a diffiult challenge for me even after i found the 
correct documentation for the solution, i had trouble figuring out how the use of a class
is relevant to solving the problem, even after i managed to create an object from the
form input, i didn;t realize until the very end that what i received from the value variable is actually an object,
it helped me to get a better sense of what is the syntactical difference between js and JSON, and eventually
the solution was pretty clear - just stringify the value variable and append it.
*/
