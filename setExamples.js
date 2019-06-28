// SET

// create new array with duplicate elements
let names = ['osama', 'muneeb', 'najam', 'osama'];
// create new set, pass names array, it will save unique values
let newSet = new Set(names);
console.log(newSet) // Output: Set { 'osama', 'muneeb', 'najam' }


/************************************************************** */

// add value
// newSet.add('faraz');
// console.log(newSet) // Output: Set { 'osama', 'muneeb', 'najam', 'faraz' }

// delete value
// newSet.delete('osama');
// console.log(newSet) // Output: Set { 'muneeb', 'najam', 'faraz' }


/************************************************************** */

// check value in set
// console.log(newSet.has('osama')) // Output: true
// console.log(newSet.has('ismail')) // Output: false


/************************************************************** */

// for of loop
// for (let value of newSet) console.log(value); //Output: osama muneeb najam faraz


/************************************************************** */

// spread operator with set in array
// let uniqueNames = [...newSet]
// console.log(uniqueNames) // Output: [ 'osama', 'muneeb', 'najam', 'faraz' ]


/************************************************************** */

// Set with string
// it will break 'osama' in characters and save unique values
// let srtingSet = new Set('osama');
// console.log(srtingSet); // Set { 'o', 's', 'a', 'm' }