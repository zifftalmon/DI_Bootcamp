let form = document.getElementById("toDo")

form.addEventListener("submit", addTask)

const body = document.body

async function addTask (e) {
    e.preventDefault();
    
    let name = document.forms[0].elements.taskName.value
    
    let desc = document.forms[0].elements.taskDesc.value
 
    let start = document.forms[0].elements.startDate.value

    let end = document.forms[0].elements.endDate.value

    let taskInfo = [`Name : ${name}`, `Description : ${desc}`, `Start date and time : ${start}`, `End date and time : ${end}` ]

    taskInfo.forEach((element => {
        let infoDiv = document.createElement("div")
        let infoPara = document.createElement("p")
        infoPara.innerText = element
        infoDiv.append(infoPara)
        body.append(infoDiv)
    }))
}