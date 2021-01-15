/**
 * Manipuler des tableaux et objets imbriqués
 */

/**
 * Tableau d'objets
 */
const students = [
    { name: "Bob", age: 17 },
    { name: "Susy", age: 18 },
    { name: "Ted", age: 18 },
    { name: "Sarah", age: 20 },
    { name: "Bill", age: 19 }
  ];

//Afficher une des valeur d'un objet du tableau
    console.log(students[1].name);//->"Susy";
//Ajouter un objet au tableau
    students.push({ name: "Steve", age: 25 });
    //OU
    const bob = { name: "Bob", age: 21 };
    students.push(bob);

/**
 * Tableau de tableaux : tableaux à 2 dimensions
 */
const twoD = [
    ["Bob", "Susy", "Ted"],
    ["Lilly", "Sarah", "Bill"],
    ["Thomas", "Barry", "Alex"]
  ]
//Afficher des infos situées à différents niveaux
  console.log(twoD[1]); // <== [ 'Lilly', 'Sarah', 'Bill' ]
  console.log(twoD[1][0]); // <== 'Lilly'
  console.log(twoD[0][0]); // <== 'Bob'
  console.log(twoD[0][3]); // <== undefined
//   console.log(twoD[3][0]); // TypeError: Cannot read property '0' of undefined

/**
 * Tableau de tableaux d'objets
 */
const classes = [
    [
      { firstName: 'Tomas', lastName: 'Bechtelar', age: 22 },
      { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
      { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
      { firstName: 'Lulu', lastName: 'Considine', age: 20 },
      { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
    ],
    [
      { firstName: 'Charlie', lastName: 'Rolfson', age: 23 },
      { firstName: 'Austin', lastName: 'Schowalter', age: 26 },
      { firstName: 'Emie', lastName: 'Franecki', age: 29 },
      { firstName: 'Okey', lastName: 'Runte', age: 18 },
      { firstName: 'Jameson', lastName: 'Jakubowski', age: 22 }
    ]
  ];

//Afficher des infos de différents niveaux
    console.log(classes[0]);
    // [ { firstName: 'Tomas', lastName: 'Bechtelar', age: 22 },
    //   { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
    //   { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
    //   { firstName: 'Lulu', lastName: 'Considine', age: 20 },
    //   { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
    // ]
    console.log(classes[0][2]);
    // { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 }
    console.log(classes[0][2].firstName);
    // 'Ashleigh'

/**
 * Objet contenant des objets
 */
const classRoom1 = {
    teacher:  { firstName: 'Greg', lastName: 'Dach', age: 38 }
  };

//Afficher les valeurs d'un objet imbriqué dans un autre
  console.log(classRoom1.teacher.firstName); // <== 'Greg'
  console.log(classRoom1.teacher.age); // <== 38

/**
 * Objet contenant plusieurs niveaux d'objets
 */
const classRoom2 = {
    teacher:  {
      firstName: 'Greg',
      lastName: 'Dach',
      age: 38,
      address: {
        street: "3085 Kelton Knolls",
        city: "Aldaside",
        state: "Maryland"
      }
    }
  };

//Afficher la ville de l'adresse du professeur de la classe
    console.log(classRoom2.teacher.address.city); // <== "Aldaside"

/**
 * Objet contenant des objets et des tableaux d'objets
 */
const classRoom3 = {
    teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
    students: [
      { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
      { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
      { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
      { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
      { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
    ]
  };

//Afficher le prenom du 3e étudiant de la classe
  console.log(classRoom3.students[2].firstName); // <== 'Jan'
//Afficher l'age du professeur de la classe 
  console.log(classRoom3.teacher.age); // <== 25

/**
 * Objet contenant des tableaux d'objets contenant des tableaux d'objets
 */
const school = {
    name: "Fake School 1",
    classRooms: [
      {
        teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
        students: [
          { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
          { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
          { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
          { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
          { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
        ]
        },
      {
        teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
        students: [
          { firstName: 'Manley', lastName: 'Doyle', age: 18 },
          { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
          { firstName: 'Sid', lastName: 'Rohan', age: 30 },
          { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
          { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
        ]
      }
    ]
  }

//Afficher le nom de l'école
  console.log(school.name); // <== "Fake School 1"
//Afficher le prénom du 5e élève de la 2e classe de l'école  
  console.log(school.classRooms[1].students[4].firstName); // <== Gerald

/**
 * Objet contenant des tableaux d'objets contenant des tableaux d'objets contenant des tableaux d'objets (Bdd)
 */
const schoolSystem = {
    schools: [
      {
        name: "Fake School 1",
        classRooms: [
          {
            teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
            students: [
                { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
                { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
                { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
                { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
                { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
              ]
          },
          {
            teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
            students: [
              { firstName: 'Manley', lastName: 'Doyle', age: 18 },
              { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
              { firstName: 'Sid', lastName: 'Rohan', age: 30 },
              { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
              { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
            ]
          }
        ]
       },
       {
        name: "Fake School 2",
        classRooms: [
          {
            teacher: { firstName: 'Lucas', lastName: 'Schroeder', age: 29 },
            students: [
              { firstName: 'Giuseppe', lastName: 'Hegmann', age: 24 },
              { firstName: 'Jennyfer', lastName: 'Hane', age: 19 },
              { firstName: 'Mikayla', lastName: 'Braun', age: 23 },
              { firstName: 'Rickie', lastName: 'White', age: 22 },
              { firstName: 'Rose', lastName: 'Collins', age: 30 }
            ]
          },
          {
            teacher: { firstName: 'Green', lastName: 'Sauer', age: 25 },
            students: [
              { firstName: 'Melany', lastName: 'Welch', age: 25 },
              { firstName: 'Paxton', lastName: 'Corkery', age: 22 },
              { firstName: 'Nellie', lastName: 'Hauck', age: 26 },
              { firstName: 'Eunice', lastName: 'Hirthe', age: 26 },
              { firstName: 'Aylin', lastName: 'Barrows', age: 26 }
             ]
           }
         ]
       },
       {
        name: "Fake School 3",
        classRooms: [
          {
            teacher: { firstName: 'Nikko', lastName: 'Crist', age: 42 },
            students: [
              { firstName: 'Christop', lastName: 'Hahn', age: 26 },
              { firstName: 'Newell', lastName: 'Kemmer', age: 27 },
              { firstName: 'Katheryn', lastName: 'Heller', age: 26 },
              { firstName: 'Saul', lastName: 'Heathcote', age: 20 },
              { firstName: 'Maudie', lastName: 'Haley', age: 30 }
            ]
          },
          {
            teacher: { firstName: 'Nathanael', lastName: 'Hansson', age: 50 },
            students: [
              { firstName: 'Jensen', lastName: 'Reichel', age: 21 },
              { firstName: 'Lois', lastName: 'Kulas', age: 28 },
              { firstName: 'Caterina', lastName: 'Wolff', age: 28 },
              { firstName: 'Dahlia', lastName: 'Collier', age: 24 },
              { firstName: 'Linwood', lastName: 'Langosh', age: 26 }
            ]
          }
        ]
      }
    ]
  };

//Afficher le nom de la 2e école du système
  console.log(schoolSystem.schools[1].name); // <== Fake School 2
//Afficher la 2e école du système  
  console.log(schoolSystem.schools[1]);
  //{ name: 'Fake School 2',
  //  classRooms: 
  //    [ 
  //        { teacher: [Object], students: [Array] },
  //        { teacher: [Object], students: [Array] } 
  //    ] 
  // }
//Afficher la 1ere classe de la 2e école du système  
  console.log(schoolSystem.schools[1].classRooms[0]);
  
  // {
  // 	teacher: { firstName: 'Lucas', lastName: 'Schroeder', age: 29 },
  // 	students: [
  // 		{ firstName: 'Giuseppe', lastName: 'Hegmann', age: 24 },
  // 		{ firstName: 'Jennyfer', lastName: 'Hane', age: 19 },
  // 		{ firstName: 'Mikayla', lastName: 'Braun', age: 23 },
  // 		{ firstName: 'Rickie', lastName: 'White', age: 22 },
  // 		{ firstName: 'Rose', lastName: 'Collins', age: 30 }
  // 	]
  // }
//Afficher le 2e élève de la 1ere classe de la 2e école du système  
  console.log(schoolSystem.schools[1].classRooms[0].students[1]);
  // <== { firstName: 'Jennyfer', lastName: 'Hane', age: 19 }
//Afficher le prénom du 2e élève de la 1ere classe de la 2e école du système 
  console.log(schoolSystem.schools[1].classRooms[0].students[1].firstName); // <== Jennyfer
//Ajouter un élève avec le nom de Lucille D. Lozano à la Fake School 2, dans la première classe
  schoolSystem.schools[1].classRooms[0].students.push({ firstName: 'Lucille', lastName: 'Lozano'});
  console.log(schoolSystem.schools[1]. classRooms[0]);
//Retrouver l'objet Fake School 3
  console.log(schoolSystem.schools[2]);
//Retrouver le professeur ayant pour prénom "Nathanael"
  console.log(schoolSystem.schools[2].classRooms[1].teacher);
//Retrouver l'élève ayant pour prénom "Saul"
  console.log(schoolSystem.schools[2].classRooms[0].students[3].firstName);

/**
 * BONUS PERSO: La recherche de la mort qui tue
 */
//Afficher tous les noms de famille de tous les élèves de toutes les classes de toutes les écoles du système scolaire et leur nombre total

//Pour un nom précis:
//schoolSystem.schools[2].classRooms[0].students[3].lastName
//Dans le systeme scolaire, pour [telle] école de la liste des écoles, pour [telle] classe de la liste des classes, pour [tel] élève de la liste des élèves, mettre le nom dans le tableau
//On remplace chaque [tel/telle] par une boucle pour le transformer en [chaque]= 3 boucles imbriquées
//Dans le systeme scolaire, pour [chaque] école de la liste des écoles, pour [chaque] classe de la liste des classes, pour [chaque] élève de la liste des élèves, mettre le nom dans le tableau

function listNames(system){
    let studentLastNames = [];
    schoolSystem.schools.forEach(school => {
        school.classRooms.forEach(classRoom =>{
            classRoom.students.forEach(student=>{
                studentLastNames.push(student.lastName);
            })
        })
    });
    console.log(studentLastNames);
    console.log(studentLastNames.length);
}

listNames(schoolSystem);
