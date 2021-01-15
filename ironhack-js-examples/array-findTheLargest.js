/**
* Find the largest
Let’s create a program to find the largest number in a series.
*/
const numbers = [10, 16, 99, 0, 52, 41, 7];

//Create a variable to hold the current largest number called currentLargest. At the beginning, the value will be the first element of numbers.
let currentLargest = numbers[0];

//Iterate through the array. For each number in the array, compare it to currentLargest.
for (let i = 0; i < numbers.length; i++){
  // if ( current number is greater than the currentLargest ){
  if (numbers[i] > currentLargest){
    // it is the new largest
    currentLargest = numbers[i];
    //console.log(currentLargest);
  } 
}
     
console.log(`The largest number is: ${currentLargest}`);