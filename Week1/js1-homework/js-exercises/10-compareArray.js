'use strict';

const array = ["hello", 123, true, {
  name: "Noer"
}];
const items = ['amsterdam', 31, false, {
  age: 35
}, 'namaste', 1985, null];

console.log('The length of the array is ' + array.length);
console.log('The length of the items is ' + items.length);

if (array.length === items.length) {
  console.log('`these arrays have same elements..');
} else {
  console.log('these arrays are not same!')
}