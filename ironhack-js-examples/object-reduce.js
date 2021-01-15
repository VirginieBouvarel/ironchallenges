//On peut utiliser la fonction reduce sur les propriétés d'un objet
//à condition de définir une valeur par défaut

//Calculer la somme des ages
const people = [
    { name: "Candice", age: 25 },
    { name: "Tammy",   age: 30 },
    { name: "Allen",   age: 49 },
    { name: "Nettie",  age: 21 },
    { name: "Stuart",  age: 17 }
  ];
const ages = people.reduce((sum, person) => {
    return sum + person.age;
  }, 0);
console.log(ages); // <== 142

//Calculer la moyenne de la classe
const students = [
    { name: "Candice", grade: 15 },
    { name: "Tammy",   grade: 14 },
    { name: "Allen",   grade: 19 },
    { name: "Nettie",  grade: 11 },
    { name: "Stuart",  grade: 17 }
  ];

const avg2 = students.reduce((sum, student) => {return sum + student.grade},0)/students.length;
console.log(avg2);

//1. const avg2 = students.reduce()/students.length
//2. à l'intérieur de reduce() on calcule la somme des notes pour chaque étudiant(student.grade)
// moyenne = somme des notes pour chaque étudiant / nombre d'étudiants



//Avec un objet contenant un tableau d'objet -->e-commerce
//pour chaque produit une liste de commentaires utilisateurs dont un score
//calculer le score moyen des commentaires utilisateurs pour le produit 

const product = {
    name: "AmazonBasics Apple Certified Lightning to USB Cable",
    price: 7.99,
    manufacter: "Amazon",
    reviews:[
      {user: "Pavel Nedved",comments: "It was really usefull, strongly recommended",rate: 4},
      {user: "Alvaro Trezeguet",comments: "It lasted 2 days",rate: 1},
      {user: "David Recoba",comments: "Awesome",rate: 5},
      {user: "Jose Romero",comments: "Good value for money",rate: 4},
      {user: "Antonio Cano",comments: "It broked really fast",rate: 2},
    ]
  }
const rateAvg = product.reviews.reduce((sum, review) => {return sum + review.rate}, 0)/product.reviews.length;
console.log(rateAvg);
