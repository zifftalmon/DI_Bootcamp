let div = document.getElementById("container");

console.log(div);

let li = document.getElementsByTagName("li")[1].innerHTML;

li = "richard";

console.log(li);

let ul = document.getElementsByClassName("list");

let li1 = ul[0].firstElementChild;

li1 = "ziv";

console.log(li1);

let li2 = ul[1].firstElementChild

li2 = "ziv";

console.log(li2);

let liDel = document.getElementsByClassName("list")[1];

liDel.removeChild(liDel.children[1]);

console.log(liDel);

