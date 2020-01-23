// Declare 4 variables: 2 must be strings and 2 must be objects
// Create 6 conditional statements, where for each you check if the data type of one variable is the same as the other
// Find out how to check the type of a variable
// Write 2 console.log statements to log the type of 2 variables, each with a different data type
// Now compare the types of your different variables with one another
// Log Not the same... when the types are different

'use strict';

let name = 'hasan has';
let country = 'nederlands';
let book = {
  name: 'Black Blood',
  author: 'Grange',
  pages: 346
};
let auto = {
  mark: 'mazda3',
  year: 2019,
}

console.log(typeof name);
console.log(typeof auto);

if (typeof name === typeof country) {
  console.log('name and country are same type..');
} else console.log('name and country are different types..');

if (typeof name === typeof book) {
  console.log('name and book are same type..');
} else console.log('name and book are different types..');

if (typeof name === typeof auto) {
  console.log('Same type..');
} else console.log('different types..');

if (typeof country === typeof book) {
  console.log('Same type..');
} else console.log('different types..');

if (typeof country === typeof auto) {
  console.log('Same type..');
} else console.log('different types..');

if (typeof book === typeof auto) {
  console.log('Same type..');
} else console.log('different types..');