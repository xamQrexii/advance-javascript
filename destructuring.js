// DESTRUCTURING ARRAY

// Try any part one at a time
/************************************************** */

// declared and initialized and array
let arr = ['osama', 29, 'freelancer'];

// ES5 ==> save elements in variables in
// let name = arr[0];
// let age = arr[1];
// let profession = arr[2];
// console.log(name, age, profession);

/************************************************** */

// ES6 ==> destructure array
// let [name, age, profession, hello] = arr;
// console.log(name, age, profession);

// ES6 ==> destructure specific elements
// let [name, , profession] = arr;
// console.log(name, profession);

/************************************************** */

// DESTRUCTURING OBJECT

// declared and initialized object
let person = {
    name: 'osama',
    age: 29,
    profession: 'freelancer'
}

// ES5 => save properties in vaiables
// let name = person.name;
// let age = person.age;
// let profession = person.profession;
// console.log(name, age, profession);

// ES6 => descstructure object
// NOTE: variable name must be same as key name to strore value
// let {name, age, profession} = person;
// console.log(name, age, profession);