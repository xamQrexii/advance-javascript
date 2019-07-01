// SESSION STORAGE

// setItem
sessionStorage.setItem("fname", "Muhammad")
sessionStorage.setItem("lname", "Osama")


/*********************************************** */


// getItem
let fristName = sessionStorage.getItem("fname");
let lastName =  sessionStorage.getItem("lname");

console.log(fristName); // "Muhammad"
console.log(lastName); // "Osama"

/*********************************************** */


// removeItem
sessionStorage.removeItem("fname");
sessionStorage.getItem("fname");      //RESULT: null
console.log(sessionStorage.key(0))    //RESULT: Display key name "lname"

/*********************************************** */

// check length
console.log(sessionStorage.length)    //RESULT: 1 (This value can be different)

/*********************************************** */

// clear sessionStorage
sessionStorage.clear()               //this line will remove all the data from session storage
console.log(sessionStorage.length)    //RESULT: 0 (This value can be different)

/*********************************************** */