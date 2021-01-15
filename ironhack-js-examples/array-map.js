/*1*/

// array of cities:
const cities = ["miami", "barcelona", "madrid", "amsterdam", "berlin", "sao paulo", "lisbon", "mexico city", "paris"];

//return an array with the first letter of each city’s name capitalized
const firstLetterCapitalized = cities.map(city => city[0].toUpperCase());
console.log(firstLetterCapitalized);

/*2*/
/*
Imagine you are a Math teacher and you have to grade our students based on their performance on two projects (40% of final grade) and their final exam (60% of final grade). 
So the whole class is represented as an array of objects (each object contains the data about that student), and we need to get a new array of objects, but this time the objects will contain only student´s name, and their final grade. Let´s do it.
*/
const students = [
    {name: "Tony Parker", firstProject: 80, secondProject: 75, finalExam: 90},
    {name: "Marc Barchini", firstProject: 84, secondProject: 65, finalExam: 65},
    {name: "Claudia Lopez", firstProject: 45, secondProject: 95, finalExam: 99},
    {name: "Alvaro Briattore", firstProject: 82, secondProject: 92, finalExam: 70},
    {name: "Isabel Ortega", firstProject: 90, secondProject: 32, finalExam: 85},
    {name: "Francisco Martinez", firstProject: 90, secondProject: 55, finalExam: 78},
    {name: "Jorge Carrillo", firstProject: 83, secondProject: 77, finalExam: 90},
    {name: "Miguel López", firstProject: 80, secondProject: 75, finalExam: 75},
    {name: "Carolina Perez", firstProject: 85, secondProject: 72, finalExam: 67},
    {name: "Ruben Pardo", firstProject: 89, secondProject: 72, finalExam: 65}
]


const finalGrades = students.map(student => {
    const projectsAvg = (student.firstProject + student.secondProject)/2;
    const finalGrade  = student.finalExam * 0.6 + projectsAvg * 0.4;
    return {
      name: student.name,
      finalGrade: Math.round(finalGrade)
    }
  })

console.log(finalGrades);