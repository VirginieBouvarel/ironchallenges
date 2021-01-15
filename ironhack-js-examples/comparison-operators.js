/**
* Alternative à FizzBuzz
*/

//Print the numbers 1 through 50
for (let i = 1; i <= 50; i++){
    //If the number is divisible by 7, you must skip the next number
    if (i % 7 === 0) { 
      continue; 
    }
    //If the number is divisible by 10 or 15, you must print “Donkey!”
    if (i % 10 === 0 || i % 15 === 0){
      console.log(i + "Donkey!");
    }
    //If the number is not divisible by 2 and the previous number is divisible by 10, you must print “Monkey!”
    if (i % 2 !== 0 &&  ((i - 1) % 10 === 0)){
      console.log(i + "Monkey!");
    }
  }