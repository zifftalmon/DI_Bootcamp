let form = document.getElementById("myForm");
let radius = document.getElementById("radius");
let volume = document.getElementById("volume");

form.addEventListener("submit",volumeValue);

function volumeValue(e){
    e.preventDefault ();
    const r = Number(radius.value);
    if(Number.isNaN(r)) return;
    const v = (4 / 3) * Math.PI * r **3;
    volume.value = v;
    console.log(v);
}





