let boxOne = document.getElementById("box");

boxOne.setAttribute("draggable", "true");

boxOne.addEventListener("dragstart", startDragging);

function startDragging(event) {
    event.dataTransfer.setData("div", event.target.id)
    console.log("yes");
}

function modifyDropZone () {
    const dropZone = document.getElementById("target");

    
        dropZone.addEventListener("dragover", draggingOver);
        dropZone.addEventListener("drop", dropOnTarget);
    
}
modifyDropZone();

function draggingOver (event) {
    event.preventDefault();
}

function dropOnTarget (event) {
    event.preventDefault();
    const dataId = event.dataTransfer.getData("div");
    const getBox = document.getElementById(dataId);
    event.target.appendChild(getBox);
}