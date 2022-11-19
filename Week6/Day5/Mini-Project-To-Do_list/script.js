let form = document.getElementById("toDo")

form.addEventListener("submit", addTask)

const body = document.body

let todoItems = [];

async function addTask (e) {
    e.preventDefault();

    let name = document.forms[0].elements.taskName.value
    let desc = document.forms[0].elements.taskDesc.value
    let start = document.forms[0].elements.startDate.value
    let end = document.forms[0].elements.endDate.value

    if (name,desc,start,end != "") {    
        let taskInfo = {
         Name: `${name}`,
         Description: `${desc}`,
         Startdateandtime : `${start}`,
         Enddateandtime : `${end}`,
         Done: false
        }
         console.log(taskInfo);
         todoItems.push(taskInfo)
         localStorage.setItem(taskInfo.Name, JSON.stringify(taskInfo))
         console.log(todoItems);
    } else {
        alert("write something!")
    }

    }



    
    // let check = document.createElement("input")
    // let checkLabel = document.createElement("label")
    // check.type="checkbox"
    // check.id="taskCheck"
    // checkLabel.htmlFor = "taskCheck"
    // checkLabel.appendChild(document.createTextNode('Complete'))
    // infoDiv.append(check)
    // infoDiv.append(checkLabel)
    

