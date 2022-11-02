function makeJuice (size) {
    let ingredients = [];
    addIngredients("kiwi", "apple", "carrot");
    console.log(size);
    displayJuice(ingredients);  

function addIngredients (one, two, three) {
    ingredients.push(one, two, three);   
}

function displayJuice(ingredients) {
    let part1 = `The client wants a ${size} juice, containing `;         
    let part2 = "";
    ingredients.forEach((element => {
        part2 += element + ', '
    }));
    let sentence = part1 + part2; 
    console.log(sentence);
}
}
makeJuice("large");


