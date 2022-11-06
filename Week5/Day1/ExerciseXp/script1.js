let form = document.getElementById("frm");

form.setAttribute("action","/Users/Ziv/Documents/coding%20files/DI-Bootcamp/Week5/Day1/ExerciseXp/index1.html")

// form.setAttribute("method", "GET");
form.setAttribute("method", "POST");


let linebreak = document.createElement("br");
let linebreak1 = document.createElement("br");
let linebreak2 = document.createElement("br");
let linebreak3 = document.createElement("br");


let label1 = document.createElement("label");
label1.setAttribute("for","name");
label1.textContent = "Name";

let text1 = document.createElement("input");
text1.setAttribute("type","text");
text1.setAttribute("id", "name");
text1.setAttribute("name","name");
text1.setAttribute("value","")

let label2 = document.createElement("label");
label2.setAttribute("for","comments");
label2.textContent = "Comments";

let text2 = document.createElement("input");
text2.setAttribute("type", "text");
text2.setAttribute("name","comments");
text2.setAttribute("value","")


let button = document.createElement("input");
button.setAttribute("type", "submit");
button.setAttribute("value","send");

form.appendChild(label1);
form.appendChild(linebreak);
form.appendChild(text1);
form.appendChild(linebreak1);
form.appendChild(label2);
form.appendChild(linebreak2);
form.appendChild(text2);
form.appendChild(linebreak3);
form.appendChild(button);

console.log(form);