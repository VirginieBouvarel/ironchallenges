const animalArray = ["dog", "cat", "fish", "lizard", "whale", "cheetah"];
console.log(`Original: ${animalArray}`); // => Original: dog,cat,fish,lizard,whale,cheetah
console.log("------");

// "From the first element, remove one going forward"
animalArray.splice(0, 1);
console.log(`From the first element, remove one going forward: ${animalArray}`);
// => From the first element, remove one going forward: cat,fish,lizard,whale,cheetah

//  "From the second element, remove two going forward"
animalArray.splice(2, 2);
console.log(`From the second element, remove two going forward: ${animalArray}`);
// => From the second element, remove two going forward: cat,fish,cheetah

// If we pass a third argument
// It is inserted as the replacement
animalArray.splice(0, 1, "Something else");
console.log(`If we pass a third argument: ${animalArray}`); // => If we pass a third argument: Something else,fish,cheetah

//Exercise
console.log(animalArray);
//Add two of your favorite animals to the end of the array
animalArray.push("lion", "tiger");
console.log(animalArray);
//Remove the first two elements of the array
animalArray.splice(0, 2);
console.log(animalArray);
//Replace the last element in the array with the word “last”
animalArray.splice(2,1, "last");
console.log(animalArray);