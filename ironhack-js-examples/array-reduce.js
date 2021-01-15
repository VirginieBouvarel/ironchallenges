//syntax
// array.reduce((amount, current) => amount + current);

const numbers = [2, 4, 6, 8];
const total = numbers.reduce((amount, current) => {
    console.log("Total: ", amount, "+ current: ", current);
    return amount + current;
  });
  console.log("Total is: ", total);//--> 20

//A partir d'une autre valeur que array[0], fournie en paramètre
const total2 = numbers.reduce((amount, current) => amount + current, 23);
console.log(total2);

//Faire un produit
const total3 = numbers.reduce((amount, current) => amount * current);
console.log(total3);

//Concaténer des strings
const words = ["This", "is", "a", "big", "string"];
const sentence = words.reduce((sum, word) => sum + " "+ word);
console.log(sentence);