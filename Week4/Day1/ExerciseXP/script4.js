const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((element, index) => {
    console.log(`${index + 1}# choice is ${element}`);
    element === "Violet" ? console.log("yeah"):console.log("no...");
})
