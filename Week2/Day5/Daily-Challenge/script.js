let bottles = prompt("please write a number");

function decreaseBottle() {
    for(let i = 0; i < bottles.length; i++) {
        if(bottles[i] == bottles.length); {
            bottles--
        }
    }return(`take 1 down pass it around ${bottles} bottles of beer on the wall`);
}

let oneBottleDown = decreaseBottle();   
console.log(oneBottleDown);