// SPREAD OPERATOR

/*The spread operator allows us to expand elements. 
With rest parameters we were able to get a list of arguments into an array. 
spread operators however, let us unpack elements in an array to single/individual arguments.*/

// SPREAD OPERATOR ==> ARRAY
// let arr1 = ['osama', 'muneeb', 'najam', 'faraz', 'irfan']
// console.log(arr1);
// spread array in to a new array
// let arr2 = ['jawad', ...arr1];
// console.log(arr2);

/************************************************** */

// SPREAD OPERATOR ==> OBJECT
// let person = {name: 'osama','age': 29, profession: 'freelancer'}
// console.log(person)
// spread object in to a new object
// let newObj = {hobbies: ['cricket', 'football'], ...person}
// console.log(person2)


// /************************************************** */

// SPREAD OPERATOR WITH DESTRUCTURING
// let { y, x, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// console.log(x) // Result: 1
// console.log(y) // Result: 2
// console.log(z) // Result: {a: 3, b: 4}