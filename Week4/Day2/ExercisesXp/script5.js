function makeJuice (size) {
    addIngredients("kiwi", "apple", "carrot");
        function addIngredients (one, two, three) {
            let para = document.getElementById("para");
            let text = document.createTextNode(`The client wants a ${size} juice, containing ${one}, ${two}, ${three}`);
            para.appendChild(text);
    }
}
makeJuice("small");