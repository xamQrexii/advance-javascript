// LOCAL STORAGE

// setItem
localStorage.setItem("fname", "Muhammad")
localStorage.setItem("lname", "Osama")


/*********************************************** */


// getItem
let fristName = localStorage.getItem("fname");
let lastName =  localStorage.getItem("lname");

console.log(fristName); // "Muhammad"
console.log(lastName); // "Osama"

/*********************************************** */


// removeItem
localStorage.removeItem("fname");
localStorage.getItem("fname");      //RESULT: null
console.log(localStorage.key(0))    //RESULT: Display key name "lname"

/*********************************************** */

// check length
console.log(localStorage.length)    //RESULT: 1 (This value can be different)

/*********************************************** */

// clear localStorage
localStorage.clear()               //this line will remove all the data from local storage
console.log(localStorage.length)    //RESULT: 0 (This value can be different)

/*********************************************** */