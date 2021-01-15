const animalArray = ["dog", "cat", "fish"];

// option 1 - ES5 (still in use so good to know):
// animal is just a placeholder, can be any word
animalArray.forEach(function(animal){
  console.log(`option 1: ${animal}`);
});

// option 2 - ES6 (new and cool way that uses arrow function ( => ) - we will talk about this in the course)
// arrayElement is just a placeholder, can be any word
animalArray.forEach(arrayElement => {
  console.log(`option 2: ${arrayElement}`);
});

//Exercise
//Create an array with 6 of your favorite foods
let foods = ["Burger", "Pizza","Curry's Chiken","Lemon Pie", "Carbonara's pasta", "4 Cheeses's pasta"];
//With the loop of your choice, iterate through the array, but only print out the foods with an even index
for (let i = 0; i < foods.length; i++){
  if (i % 2 !== 0){
    continue;
  }
  console.log(foods[i]);
}