//tableau de strings
const words = ["Hello", "Goodbye", "First", "A", "a", "Second", "Third"];
//Trier par ordre aphabétique unicode
words.sort();
console.log(words);
//Trier par odre alphabétique unicode inversé
words.sort().reverse();
console.log(words);
//OU
words.sort((a,b) =>{
    if (a > b){
        return -1;
    }
    if (a < b) {
        return 1
    }
    return 0;
})
console.log(words);
//Trier par ordre décroissant de longueur
words.sort((a,b) => b.length - a.length);
console.log(words);



//tableau de numbers
const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
//Trier par ordre ordinal (= comme un sommaire)
numbers.sort();
console.log(numbers);
//Trier par ordre croissant
numbers.sort((a, b) => a - b);
console.log(numbers); 
//TRier par ordre décroissant
numbers.sort((a, b) => b - a);
console.log(numbers);


//inverser l'ordre des éléments d'un tableau
const numbers2 = [ 22, 23, 99, 68, 1, 0];
numbers2.reverse();
console.log(numbers2);