// Iteration 1: Names and Input
let hacker1 = "Virbaya";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Virginie";
console.log(`the navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
/*
Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/
if (hacker1.length == hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters !`);
  }else{
    if(hacker1.length > hacker2.length){
      console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    }else{
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    }
  }

// Iteration 3: Loops
/*
Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
*/
let hacker1Capitalized = "";
hacker1 = hacker1.toUpperCase();
for (let i = 0; i < hacker1.length; i++){
  hacker1Capitalized += hacker1[i] + " ";
}
console.log(hacker1Capitalized);

/*
 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
 */
// let hacker2Reverse = hacker2[hacker2.length -1];
// for (let i = 1; i < hacker2.length; i++){
//     hacker2Reverse += hacker2.slice(-(i+1), -i);
// }
// console.log(`"${hacker2Reverse}"`);
/*
solution 2
*/
// let newHacker2 = "";
// for (let i = hacker2.length - 1; i >= 0; i--){
//     newHacker2 += hacker2[i];
// }
// console.log(newHacker2);
/*
solution 3
*/
console.log(hacker2.split("").reverse().join(""));

/*
Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

if(hacker1.localeCompare(hacker2) === 0){
    console.log("What?! You both have the same name?");
}else{
    if (hacker1.localeCompare(hacker2) === 1){
        console.log("The driver's name goes first.");
    }else{
        console.log("Yo, the navigator goes first definitely.");
    }
}

/*BONUS 1*/
let paragraphs = `
Lorem ipsum et dolor sit amet, consectetur et adipiscing elit. 
Nunc ut dui ac purus euismod et mattis. 
Maecenas luctus et libero eget odio tristique, quis et dictum ante pulvinar.`;
/*
Make your program count the number of words in the string.
*/
console.log(`Paragraphs counts ${paragraphs.split(" ").length} words.`);
//On coup le texte à chaque espace et on compte le nombre de morceaux
/*
Make your program count the number of times the Latin word "et" appears.
*/
console.log(`Paragraphs counts ${paragraphs.split(" et").length-1} words.`);
//on coupe le texte tous les " et" et on compte le nombre de morceaux, moins le dernier qui n'est pas rattaché a un séparateur " et".

