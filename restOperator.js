// REST OPERATOR

// Try any part one at a time
/************************************************** */

// function add(x, y) {
//     return x + y;
// }

// let sum = add(1, 2, 3, 4, 5) // returns 3
// console.log(sum);

/*The above function call returns 3, 
this is because in Javascript it is possible to call a function with any number of arguments.
However, only the fist two arguments will be counted.*/


/************************************************** */

/*With rest parameters we can gather any number of arguments into an array and do what we want with them.
So we can re-write the add function like this*/

function add(...args) {
    let result = 0;

    for (let index = 0; index < args.length; index++) {

        result += args[index];

    }
    console.log(args);
    return result
}

console.log(add(1)) // returns 1
console.log(add(1, 2)) // returns 3
console.log(add(1, 2, 3, 4, 5)) // returns 15

// Note: Rest parameters have to be at the last argument.

/************************************************** */