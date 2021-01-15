//Une suite de tests pour un composant donné
describe("Hello Ironhack function", function () {
    //contient plusieurs specifications qui décrivent chacune 1 comportement attendu
    it("Greets an Ironhacker", function() {
        //et qui contiennent chacune une attente précise
        //expect:le résultat attendu .toEqual:doit matcher avec tel expression
      expect(helloIronhack()).toEqual("Hello Ironhacker!");
    });
  });

//Si le return du expect match avec le .toEqual (vaut true) les tests sont validés et la spec passe au vert.

//Exo calculator
//Suite de tests pour la fonctionnalité calculette
//qui est une fonction
//qui prend en paramètre un tableau de nombre
//et qui retourne leur addition
describe("My calculator", function() {
    it("Returns 0 when the array is empty", function() {
      expect(sumArray([])).toEqual(0);
    });
    it("Returns the same number when the array has just one element", function() {
      expect(sumArray([2])).toEqual(2);
    });
    it("Returns sum of numbers when array contains multiple elements", function(){
        expect(sumArray([2, 4, 6, 7, 5])).toEqual(24);
    })
  });