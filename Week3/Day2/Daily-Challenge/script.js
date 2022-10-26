let form = document.forms[0];

let input1 = document.getElementById("noun");
let input2 = document.getElementById("adjective");
let input3 = document.getElementById("person");
let input4 = document.getElementById("verb");
let input5 = document.getElementById("place");

let button = document.getElementById("lib-button")

let story = document.getElementById("story");

form.addEventListener('submit' ,function(e) {
    e.preventDefault();
    if (input1.value !== ""|| input2.value !== "" || input3.value !== ""  || input4.value !== ""  || input5.value !== "" ) {
        story.append(`${input1.value} was walking ${input2.value} with his ${input3.value} in order to ${input4.value}, they were planning to go to the ${input5.value} later on that day`)   
}
}
)
    
/*
this was an interesting exercise, i began with the same syntax that is present, when i tried to 
make the code a bit more efficient with a for loop it looped the click as well, this was not very easy to solve but idecideed
to just withdraw the loop, i would like to revisit this problem
*/


