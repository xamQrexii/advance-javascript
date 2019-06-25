// CONST

// Variables defined with const behave like let variables, except they cannot be reassigned:
// const name = "Osama" // Decalred and initialized variable
// name = "Faraz" // Uncaught TypeError: Assignment to constant variable.


// Array example with const
// const numbers = [1,2,3,4,5]; // Declared and initialized array with const
// numbers[0] = 10; // you can update an element of an array
// numbers[5] = 50; // you can add new element to an array
// numbers.pop() // you can delete an element from an array
// numbers.push(60); // you can add an element to an array
// console.log(numbers) // to check output
// numbers = [20]; // Uncaught TypeError: Assignment to constant variable. You can't reassign

/************************************** */

// Object example with const
const person = { name: 'osama', profession: 'freelancer' } // Declared and initialized object with const
delete person.profession; // You can delete property
person.age = 29; // You can add popertty
console.log(person); // to check output
person = {} // const.js:24 Uncaught TypeError: Assignment to constant variable. You can't reassign

