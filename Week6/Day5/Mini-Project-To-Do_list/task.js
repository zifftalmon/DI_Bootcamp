let taskArray = [];

let task = Object.entries(localStorage);


for(let i=0; i < task.length; i++) {
    const taskObj = (JSON.parse(task[i][1]))
    const taskName = taskObj.Name
    const startDate = taskObj.Startdateandtime;
    const endDate = taskObj.Enddateandtime;
    const daysLeft = startDate-endDate
    console.log(daysLeft);
    taskArray.push(`${taskName}, ${startDate}, ${endDate}`)

}

let container = document.getElementById("taskContainer")

let list = document.getElementById("taskList")


taskArray.forEach((element) => {
    let taskDiv = document.createElement("div")
    taskDiv.innerText = element
    taskDiv.style.borderBottom = "1px solid #BC5B40"
    taskDiv.style.fontSize = "25px"
    taskDiv.style.fontFamily = 'Poppins'  
    container.append(taskDiv);
})

if (taskArray === "") {
    let title = document.createElement("h1")
    let titleText = document.createTextNode("No New Tasks!")
    title.append(titleText)
    container.innerText = title;
}
