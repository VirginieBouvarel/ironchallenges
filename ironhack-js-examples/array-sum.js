/**
* Sum the numbers
In this exercise, you’ll fill in the blanks on codepen to find the sum of an array of numbers.

The steps to summing an array of numbers are:
*/
let sum = 0;
const numbers = [2, 3, 6, 1, 7, 10];

for(let i = 0; i < numbers.length; i++){
  sum += numbers[i];
  console.log(sum);
}

// Log the sum
console.log(sum);