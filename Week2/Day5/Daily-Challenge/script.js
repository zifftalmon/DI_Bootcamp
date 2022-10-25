let bottles = prompt("please write a number");

function beerDecrease () { 
    let decrementor = 0;
    while (decrementor < bottles) {
        decrementor++;
        if (decrementor == 1) {
            console.log(`take ${decrementor} down pass it around ${bottles - 1} bottles of beer on the wall`);
        }

        if (decrementor > 1) {
            console.log(`take ${decrementor} down pass them around ${bottles - decrementor++} bottles of beer on the wall`)
        }
    }
    console.log("0 bottles of beer on the wall");
    return;
}
beerDecrease();

/*
at first this exercise was confusing for me, i was sure that to iterate over the 
bottles variable i would need a for loop, however, this turned out to be not so comfortable
since it would stop once it would it would hit the consition, and trying to utilize it
to log the lyrics of the song turned out pretty messy reapetable. i decided to try and use a while loop
instead, to set a decrementor, use that as the number in the begginig of the verse
and use it to decrement numbers in the second if statement, this proved most efficient and easy
*/