let colors = document.getElementById("colors");

function createColorBox () {
    for (let i = 0; i < 21; i++) {
        let colorBox = document.createElement("div");
        console.log("box");
        colors.appendChild(colorBox);
    }

}

createColorBox();