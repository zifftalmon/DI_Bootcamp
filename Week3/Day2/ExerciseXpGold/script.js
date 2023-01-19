const select = document.getElementById('genres')
console.log(select.value);
const displayGenre = (e) => {
    console.log(e.target.value);
}
select.addEventListener('change',displayGenre)