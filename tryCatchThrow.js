// TRY CATCH THROW

// try catch 
// try {

//     alert("Hello World!") // Try block run because there is no error


// } catch(err) {

//     console.log(err.message)

// }

/*********************************************** */

// try catch with error
// try {

//     aler("Hello World!") // Spelling mistake in alert to generate error


// } catch(err) {

//     console.log(err) // catch block run, Output: ReferenceError: aler is not defined at tryCatchThrow.js:20
//     // console.log(err.message) // you can also use err.message to get only error message, Output: aler is not defined

// }

/*********************************************** */

// try catch throw

// try catch with error
// try {

//     aler("Hello World!") // Spelling mistake in alert to generate error


// } catch(err) {

//     console.log(err) // catch block run, Output: ReferenceError: aler is not defined at tryCatchThrow.js:20
//     // console.log(err.message) // you can also use err.message to get only error message, Output: aler is not defined

// }

/*********************************************** */

// try catch with throw error
try {

    let a = 10;
    if (a != 11) throw Error(`'a' is not equal to 11`);


} catch(err) {

    // console.log(err) // catch block run, Output: Error: 'a' is not equal to 11 at tryCatchThrow.js:53
    console.log(err.message) // you can also use err.message to get only error message, Output: 'a' is not equal to 11

}