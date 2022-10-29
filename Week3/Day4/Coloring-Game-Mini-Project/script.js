
let colorArray = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan"];

let colors = document.getElementById("colors");

let white = document.getElementById("white");

let colorBox;

function createColorBox () {
    for (let i = 0; i < 21; i++) {
        colorBox = document.createElement("div");
        colors.appendChild(colorBox);
        colorBox.style.backgroundColor = colorArray[i];
        colorBox.setAttribute("id", colorArray[i]);
        colorBox.setAttribute("class", "box");
        function retrieveColor(event) {
            colorBox.style.color = event.target.id;
            
        }
        colorBox.addEventListener("click", retrieveColor)
    }
    function creatWhiteGrid () {
        for (let i = 0; i < 2006; i++) {
            let whiteBox = document.createElement("div");
            white.appendChild(whiteBox);
            whiteBox.setAttribute("class", "whitebox")
            function addColor (event) {
                event.preventDefault();
                whiteBox.style.background = colorBox.id;
                console.log(colorBox.id)
            }
            whiteBox.addEventListener("click", addColor);
            whiteBox.addEventListener("mousemove", addColor);        
        }

    }
    creatWhiteGrid();
}
createColorBox();

let clearBtn = document.getElementById("clearButton");
    function clearPage() {
    window.location.reload();
}
clearBtn.addEventListener("click", clearPage)
 








