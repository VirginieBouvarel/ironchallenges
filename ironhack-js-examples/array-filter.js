//filtrer un tableau en ne récupérnt QUE certaines valeurs dans un nouveau tableau

//Filtrer les nombres paires
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // <== [ 2, 4, 6 ]

//Filtrer seulement les gens qui peuvent entrer dans un bar aux usa (age = 21 ans)
const people = [
    { name: "Candice", age: 25 },
    { name: "Tammy", age: 30 },
    { name: "Allen", age: 20 },
    { name: "Nettie", age: 21 },
    { name: "Stuart", age: 17 },
    { name: "Bill", age: 19 }
  ];
  const ofDrinkingAge = people.filter(person => person.age >= 21);
  console.log(ofDrinkingAge);

//Filtrer les appartements avec piscine
const places = [
    {title: "Awesome Suite 20' away from la Rambla",price: 200,type: "Private Room",pool: true,garage: false},
    {title: "Private apartment",price: 190,type: "Entire Place",pool: true,garage: true},
    {title: "Apartment with awesome views",price: 400,type: "Entire Place",pool: false,garage: false},
    {title: "Apartment in la Rambla",price: 150,type: "Private Room",pool: false,garage: true},
    {title: "Comfortable place in Barcelona´s center",price: 390,type: "Entire place",pool: true,garage: true},
    {title: "Room near Sagrada Familia",price: 170,type: "Private Room",pool: false,garage: false},
    {title: "Great house next to Camp Nou",price: 140,type: "Entire place",pool: true,garage: true},
    {title: "New apartment with 2 beds",price: 2000,type: "Entire place",pool: false,garage: true},
    {title: "Awesome Suite",price: 230,type: "Private Room",pool: false,garage: false},
    {title: "Apartment 10' from la Rambla",price: 930,type: "Entire place",pool: true,garage: true}
   ]

const poolFilter = places.filter(place => place.pool);
console.log(poolFilter);

//Filtrer les nombres impairs plus grand que 42
const numbers2 = [1, 60, 112, 123, 100, 99, 73, 45];
const result = numbers2.filter(number => number % 2 !==0 && number > 42);
console.log(result);//--> [ 123, 99, 73, 45 ]