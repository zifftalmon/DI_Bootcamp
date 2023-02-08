const letter = document.querySelectorAll('#letter')

const startDragging = (e) => {
    console.log(e);
    e.dataTransfer.setData('div', e.target.id)
}

const draggingOver = (e) => {
    e.preventDefault()
}

const dropOnTarget = (e) => {
    e.preventDefault()
    const dataId = e.dataTransfer.getData('div')
    const getBox = document.getElementById(dataId)
    e.target.appendChild(getBox)
}

const modifyDropzone = () => {
    const dropZone = document.getElementById('dropzone')

    dropZone.addEventListener('dragover',draggingOver)
    dropZone.addEventListener('drop', dropOnTarget)
}

const dropBack = () => {
    const homeDropZone = document.querySelector('.container')

    homeDropZone.addEventListener('dragover', draggingOver)
    homeDropZone.addEventListener('drop',dropOnTarget)
}
modifyDropzone()
dropBack()

letter.forEach((item,i) => {
    item.setAttribute('id',`letter${i}`)
    item.setAttribute('draggable', 'true')
    addEventListener('dragstart',startDragging)
})
console.log(letter);

