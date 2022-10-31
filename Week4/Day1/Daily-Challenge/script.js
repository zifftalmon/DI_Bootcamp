const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

   const newArray = [];

   gameInfo.forEach((obj) => {
    const user  = obj.username  + "!"
    newArray.push(user);
   })

   console.log(newArray);

   const newerArray = [];

   gameInfo.forEach((obj) => {
    if (obj.score > 5) {
        newerArray.push(obj.username);
    }
   })
   console.log(newerArray);

   let sum = 0;

   gameInfo.forEach((num) => {
    sum += num.score
   })

   console.log(sum);