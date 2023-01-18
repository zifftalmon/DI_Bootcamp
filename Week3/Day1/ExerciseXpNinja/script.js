const createCalender = (year,month) => {
    const date = new Date(year,month)
    const days = []
    while (date.getMonth() === month) {
        days.push(new Date(date))
        date.setDate(date.getDate() + 1)
    }
    const calender = document.getElementById('calender')
    const table = document.createElement('table')

    const tr0 = document.createElement('tr')
    const tr1 = document.createElement('tr')
    const tr2 = document.createElement('tr')
    const tr3 = document.createElement('tr')
    const tr4 = document.createElement('tr')
    const tr5 = document.createElement('tr')
    
    let dayArr = days.map(item => {
        return item.toLocaleDateString('en-us', {weekday: 'long'}).substring(0,2)
    })

    let daysArr = dayArr.splice(0,7)
    daysArr.map(item => {
        let th = document.createElement('th')
        let dayText = document.createTextNode(item)
        th.appendChild(dayText)
        th.style.border = '1px solid black'
        tr0.appendChild(th)
    })

    let week = days.map(item => {
        return item.getDate()
    })
    let week1 = week.splice(0,7)
    let week2 = week.splice(0,7)
    let week3 = week.splice(0,7)
    let week4 = week.splice(0,7)
    let week5 = week.splice(0,3)

    let getWeek = (arr,row) => {
        arr.map(item => {
            let th = document.createElement('th')
            let text = document.createTextNode(item)
            th.appendChild(text)
            th.style.border = '1px solid black'
            row.appendChild(th)
        })
    }

    getWeek(week1,tr1)
    getWeek(week2,tr2)
    getWeek(week3,tr3)
    getWeek(week4,tr4)
    getWeek(week5,tr5)

    table.appendChild(tr0)
    table.appendChild(tr1)
    table.appendChild(tr2)
    table.appendChild(tr3)
    table.appendChild(tr4)
    table.appendChild(tr5)
    table.style.borderCollapse = 'collapse'
    calender.appendChild(table)
    console.log(days);
}
createCalender(2015,2)