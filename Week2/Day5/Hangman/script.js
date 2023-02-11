const player1Word = prompt('please enter a word')

const newWord = (word) => {
    const wordArea = document.getElementById('word')
    const wordArr = word.split('')
    const secretArr = wordArr.map(item => {
        return item = '_'
    })
    wordArea.innerText = secretArr.join(' ')
}
newWord(player1Word)

