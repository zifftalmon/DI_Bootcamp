// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne();

//THE ALERT WILL DISPLAY INSIDE THE FUNCONE FUNCTION 3, BECAUSE THE INITIAL DECLARATION MAKES THE IF STATEMENT RETURN TRUE, THUS RE ASSIGNING THE VARIABLE

// #1.2 What will happen if the variable is declared 
// with const instead of let ?

//WE WILL GET AND ERROR SAYING CONST CANT BE RE ASSIGNED

// // //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// //IN THE FIRST INVOCATION OF FUNCTHREE, WE WILL RECEIVE INSIDE FUNCTHREE FUNCTION 0, THEN, WE WILL INVOKE FUNCTWO WHICH REASSIGNS 5 TO VARIABLE A,
// //AND ON THE NEXT INVOCATION OF FUNCTHREE, IT WILL ALERT INSIDE THE FUNCTHREE FUNCTION 5

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?
// //THE SECOND INVOCATION OF FUNCTHREE WOULD DISPLAY INSIDE THE FUNCTHREE FUNCTION 0, BECAUSE CONST CANNOT BE RE-ASSIGNED


// //#3
// function funcFour() {
//     window.a = "hello";
// }

// //THE INVOCATION OF FUNCFOUR DOESNT DISPLAY anything becuse it only assigns a value to the a variable


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// //THE INVOCATION OF FUNCFIVE ALERTS INSIDE THE FUNCFIVE FUNCTION HELLO BECAUSE THE A VARIABLE INSIDE THE WINDOW IS REASSIGNED GLOBALLY

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// //THE INVOCATION OF FUNCSIX WILL ALERT INSIDE THE FUNCSIX FUNCTION TEST BECAUSE ANOTHER A VARIABLE IS DECLARED LOCALLY

// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?

// //THE INVOCATION WILL ALERT INSIDE THE FUNCSIX FUNCTION TEST BECAUSE THE VARIABLE IS DECLARED LOCALLY

//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);


//THE FIRST ALERT WILL DISPLAY IN THE BLOCK 5 BECAUSE THE BROWSER READS THE CODE FROM TOP TO BOTTOM, SO THE SECOND ALERT WILL DISPLAY OUTSIDE OF THE IF BLOCK 2 BECAUSE IT IS READ FROM TOP TO BOTTOM AND OPERATES WHAT IS INSIDE THE BLOCK FIRST

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?