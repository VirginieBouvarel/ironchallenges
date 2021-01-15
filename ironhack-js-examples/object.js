//Création d'un objet user
const user = { 
    name:"Virginie",
    id:"8",
    age:25
}
//Création de 2 objets book
const book1 = { 
    title: "The Catcher in the Rye", 
    author: "J.D Salinger", 
    isbn: "0316769487", 
    category: "Classic Literature" 
};
const book2 = { 
    title: "To Kill a Mockingbird", 
    author: "Harper Lee", 
    isbn: "0446310786", 
    category: "Classic Literature" 
};
const book3 = {
    title: "Mobydick", 
    author: "Herman Melville", 
    isbn: "1509826645", 
    category: "Classic Literature" 
}

//Attribution des 2 books au user, en ajoutant une propriété à l'objet
user.books = [book1, book2];
console.log(user);

//Création d'une librairie qui contiendra tous les futurs users (tableau de users)
const library = [];
library.push(user);
console.log(library);

//Emprunt d'un nouveau livre par le user
//= Ajouter une valeur dans le tableau book, dans l'objet  user, dans le tableau library....
library[0].books.push(book3);
/*--> tableau[valeur].propriété.push(nouveau couple key/value)*/
console.log(user); 

//Ajout de nouveaux users avec de nouveaux livres
/*nouveaux users*/
library.push({name: "Yann", id: 26, age: 30}, {name: "Karine", id: "13", age: "28"});
console.log(library);
/*nouveaux livres*/
library[1].books = [{title: "Rally sport Ford : The inside story", author: "Mike Moreton", isbn: "1845841158", category: "sport"}, {title: "Rally sport Renault", author: "Pierre Blachére", isbn: "1945846654", category: "sport"}];
console.log(library[1]);
library[2].books = [{title: "Quand Harry recontre sally", author: "lulu", isbn: "3874841158", category: "romance"}, {title: "Coup de foudre à Notting Hill", author: "Bonne Question", isbn: "12298846654", category: "romance"}, {title: "Assistante sociale : Mode d'emploi", author: "Less jenny", isbn: "567898846654", category: "metiers"}, {title: "Assistantes sociales: les blagounettes", author: "Less Jenny", isbn: "56788846654", category: "metiers"}];
console.log(library[2]);

//Affichage des livres pour chaque user
for (let i = 0; i < library.length; i++){
    let titles = "";
    for (let j = 0; j < library[i].books.length; j++){
        titles += library[i].books[j].title + ' - ';
    }
    let display = `${library[i].name} a ${library[i].books.length} livre(s): ${titles}`;
    console.log(display);
}

library[0].books[2] = {title: "Coup de foudre à Notting Hill", author: "Bonne Question", isbn: "12298846654", category: "romance"};
console.log(user);

//Afficher les livres par clients (forEach)

library.forEach( user =>{
    let titles = "";
    user.books.forEach( book => {
        titles += book.title + " - ";
    });
    console.log(`${user.name} a ${user.books.length} livre(s): ${titles}`);
})

//Récupérer les couples key/value de user
let userData = Object.entries(user);
console.log(userData);
console.log(userData[3][1][2].title);

//
console.log(Object.fromEntries(userData));

