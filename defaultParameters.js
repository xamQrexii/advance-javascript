// DEFAULT PARAMETERS

/*
function greetings(msg = 'Hey there!') {

    console.log(msg)

}
*/

/**************************************************** */

// call function without argument
// it will take argument from default paramereter
// greetings(); // Output: 'Hey there!'

/**************************************************** */

// call function with an argument
// it will replace default parameter value
// greetings('Hi there!'); // Output: 'Hi there!'

/************************************************** */

// function createIcecream({ scoops = 1, toppings = ['Dark Chocolate'] }) {
//     const scoopText = scoops === 1 ? 'scoop' : 'scoops';
//     console.log(`Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`)
// }

// createIcecream({});
// createIcecream({ scoops: 2 });
// createIcecream({ scoops: 2, toppings: ['Sprinkles', 'Smarties'] });
// createIcecream({ toppings: ['Strawberry'] });
// createIcecream();

// Result:
// Your sundae has 1 scoop with Dark Chocolate toppings
// Your sundae has 2 scoops with Dark Chocolate toppings.
// Your sundae has 2 scoops with Sprinkles and Smarties toppings.
// Your sundae has 1 scoop with Strawberry toppings.
// Error: cannot destructure property ‘scoops’ of ‘undefined’ or ‘null’




/************************************************** */

// function createIcecream({ scoops = 1, toppings = ['Dark Chocolate'] } = {}) {
//     const scoopText = scoops === 1 ? 'scoop' : 'scoops';
//     console.log(`Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`)
// }

// createIcecream({});
// createIcecream({ scoops: 1 });
// createIcecream({ scoops: 2, toppings: ['Sprinkles', 'Smarties'] });
// createIcecream({ toppings: ['Strawberry'] });
// createIcecream();

// Result:
// Your sundae has 1 scoop with Dark Chocolate toppings
// Your sundae has 2 scoops with Dark Chocolate toppings.
// Your sundae has 2 scoops with Sprinkles and Smarties toppings.
// Your sundae has 1 scoop with Strawberry toppings.
// Your sundae has 1 scoop with Dark Chocolate toppings