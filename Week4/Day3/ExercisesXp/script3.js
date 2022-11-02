const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let sentence = epic.reduce((acc, element) => {
    return `${acc} ${element}`;
},"");

console.log(sentence);