const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];


colors.forEach((color, index) => {
    console.log(`${index + 1}${getOrdinal(index + 1)} choice is ${color}`)
});


function getOrdinal(index) {
    if  ([1,2,3].includes(index)) return ordinal[index];
    return ordinal[0];
}