/**
* Average the numbers
After you have summed the array, divide the sum by the total number of elements in the array and assign this to a variable called average.

The average should be: 8.1666.
*/

let sum = 0;
const numbers = [1, 7, 4, 11, 16, 10];

//First, array sum
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
 }

//Second, array average
let average = sum/numbers.length
console.log(average);




