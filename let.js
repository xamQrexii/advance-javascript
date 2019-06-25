// LET 

// console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
// let a; // Declare variable
// console.log(a); // undefined

/************************************** */


// However, global variables defined with let will not be added as properties on the global window object like those defined with var
// let a = 10;  // globally scoped
// var b = 20; // globally scoped
// console.log(window.a); // undefined
// console.log(window.b); //  20

/************************************** */

// LET and VAR in function
// function greetUser() {
//     let userName = 'Osama'; //function block scoped
//     var city = 'Karachi'; //function block scoped
// }

/************************************** */

// Here is the difference. let is only visible in the for() loop and var is visible to the whole function.
/*
function hello() {

    for (let index = 0; index < 5; index ++) {
        console.log('Hello there!', index) // Output: Hello there! 0, Hello there! 1, Hello there! 2, Hello there! 3, Hello there! 4
    }

    console.log(index) //Uncaught ReferenceError: index is not defined

}
hello(); // call function
*/

/*
function bye() {

    console.log(index) // Output: undefined

    for (var index = 0; index < 5; index++) {
        console.log('Goodbye', index); // Output: Goodbye 0, Goodbye 1, Goodbye 2, Goodbye 3, Goodbye 4 
    }

    console.log(index); // Output: 4

}
bye();
*/

/************************************** */

// REDECLATION
// Assuming strict mode, var will let you re-declare the same variable in the same scope.
// "use strict"
// var a = 10; // Declared and initialized
// var a = 20; // // No problem, 'a' is replaced


// On the other hand, let will not
// let b = 20;
// let b = 30; // SyntaxError: Identifier 'b' has already been declared

/************************************** */

// Source: https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var?page=1&tab=oldest#tab-top