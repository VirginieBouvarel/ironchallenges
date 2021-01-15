/**
* Function exercise
*/

  //Create a function addNumbers that takes 2 parameters and returns the sum of those parameters
  function addNumbers(numberOne, numberTwo){
    return numberOne + numberTwo;
  }
  
  //Create a function subtractNumbers that takes 2 parameters and returns the difference of those parameters
  function substractNumbers(numberOne, numberTwo){
    return numberOne - numberTwo;
  }
  
  //Create a function multiplyNumbers that takes 2 parameters and returns the product of those parameters
  function multiplyNumbers(numberOne, numberTwo){
    return numberOne * numberTwo;
  }
  
  //Create a function divideNumbers that takes 2 parameters and returns the quotient of those parameters
  function divideNumbers(numberOne, numberTwo){
    return numberOne / numberTwo;
  }
  
  //Create a function calculator that takes 3 parameters. The first two parameters are the numbers. The third parameter, called operation, is the operation you will execute
  function calculator(numberOne, numberTwo, operation){
    let result;
    switch (operation){
      case "addition":
        result = addNumbers(numberOne, numberTwo);
        break;
      case "substraction":
        result = substractNumbers(numberOne, numberTwo);
        break;
      case "multiplication":
        result = multiplyNumbers(numberOne, numberTwo);
        break;
      case "division":
        result = divideNumbers(numberOne, numberTwo);
    }
    console.log(result);
  }
  
  //Calls of function
  calculator(2, 3, "addition"); //--> 5
  calculator(6, 3, "substraction"); //--> 3
  calculator(3, 3, "multiplication"); //--> 9
  calculator(8, 2, "division"); //--> 4