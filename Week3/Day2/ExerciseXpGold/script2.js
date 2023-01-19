const button = document.querySelector('input')
const deleteColor = (e) => {
    console.log(e);
    const select = document.getElementById('colorSelect')
    const i = document.getElementById('colorSelect').selectedIndex
    const option = document.getElementsByTagName('option')[i]
    select.removeChild(option)
}
button.addEventListener('click',deleteColor)