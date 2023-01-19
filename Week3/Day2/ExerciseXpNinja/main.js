const calculate = document.getElementById('calculate')

const calculateTip = (e) => {
    let amount = document.getElementById('billamt').value
    let service = document.getElementById('serviceQual').value
    let people = document.getElementById('peopleamt').value

    if(amount == 0) {
        alert('please enter amount')
    }
    else if(service == 0) {
        alert('please enter pick service quality')
    }
    
    if(people === 0 || people < 1) {
        people = 1
        const each = document.getElementById('each')
        each.style.visibility = 'hidden'
    }

    let total = (amount * service) / people
    total.toFixed(2)

    const totalTip = document.getElementById('totalTip')
    totalTip.style.display = 'block'
    const tip = document.getElementById('tip')
    tip.textContent = total

}

calculate.addEventListener('click',calculateTip)

