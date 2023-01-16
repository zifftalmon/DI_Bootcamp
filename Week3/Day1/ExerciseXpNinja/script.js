const days = []
const createCalender = (year,month) => {
    const date = new Date(year,month)
    while (date.getMonth() === month) {
        days.push(new Date(date))
        date.setDate(date.getDate() + 1)
    }
}
const table = document.createElement('table')
days.map(item => {
    table.innerHTML =  
    `
    <thead>
    <tr>
        <th>${item}</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>${item}</td>
        </tr>
    </tbody
    `
})
const calender = document.getElementById('calender')
calender.appendChild(table)
console.log(calender);
createCalender(2012,9)