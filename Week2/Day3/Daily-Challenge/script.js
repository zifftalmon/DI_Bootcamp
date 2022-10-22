for (let i = " * "; i < 1; i++) {
    console.log(i);
  for(let j = 0; j < 1; j++) {
    console.log(i,j);
    for(let k = 0; k < 1; k++) {
        console.log(i,j,k);
        for(let l = 0; l < 1; l++) {
            console.log(i,j,k,l);
            for(let m = 0; m < 1; m++) {
                console.log(i,j,k,l,m);
                for(let n = 0; n < 1; n++) {
                    console.log(i,j,k,l,m,n);
                  }
              }
          }
      }
  }

}

const maximum = 6;
let stars = "";
for (let i = 0; i < maximum; i++) {
    stars = stars + " * "
    console.log(stars);
}
/////////////////////////// CHECKER
// THE SALUTION WAS SUPPOSED TO LOOK SOMETHING LIKE THIS
// const max = 6;
// let stars = "";
// for(let index = 0; index < max; index++){
//     stars = stars + " * "
//     console.log(stars)
// }
