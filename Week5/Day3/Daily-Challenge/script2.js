const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

  function toJs() {
    
  const morseObj = JSON.parse(morse);

    const toObject = new Promise ((resolve, reject) => {
        if (Object.keys(morseObj).length != 0) {
            resolve(morseObj)
        } else {
            reject ("string is empty")
        }
    })
    toObject
    .then(res => toMorse(res))
    .catch((err) => console.log(err)); 
}

    function toMorse(obj) {
        let input = prompt("Enter a Word").split("");
        console.log(input);
        const inputToMorse = new Promise ((resolve, reject) => {
            if (input.every(prop => obj[prop])) {
                resolve(input.map(e => obj[e]));
            } else {
                reject("no")
            }
        })
        inputToMorse
        .then(res => appendToPage(res))
        .catch((err) => console.log(err));
    }


    function appendToPage(str) {

        let container = document.getElementById("container")
        
        let text = document.createTextNode(str)

        container.append(text);

    }
    toJs();