// TODO: write the methods .getAge(), .addJoke() and .getRandomJoke()

let chuck = {
    firstName: 'Chuck',
    lastName: 'Norris',
    birthDate: new Date('1940-03-10'),
    jokes:[
      'Chuck Norris counted to infinity... Twice.',
      'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis',
    ],
    displayInfo: function() {
      console.log('My name is ' + this.firstName + ' ' + this.lastName + ' and I have ' + this.jokes.length + ' jokes!')
    },
    getAge: function() {
      const ms = new Date() - this.birthDate; //résultat en millisecondes
      const age = ms/1000/60/60/24/7/52;//conversion en années
      return Math.floor(age);
    },
    addJoke: function(joke){
      this.jokes.push(joke);
      console.log(this.jokes);
    },
    getRandomJoke: function() {
      const index =  Math.floor(Math.random() * this.jokes.length);
      return this.jokes[index];
    },
  }
  
  chuck.displayInfo();
  
  console.log('getAge:', chuck.getAge()) ; // Should return 79 if you are in 2019
  
  chuck.addJoke('Chuck Norris can divide by zero.');
  console.log('getRandomJoke:', chuck.getRandomJoke());
  chuck.addJoke('Chuck Norris kills flies with his gun.');
  console.log('getRandomJoke:', chuck.getRandomJoke());
  chuck.addJoke('Chuck Norris was once in a knife fight, and the knife lost.');
  console.log('getRandomJoke:', chuck.getRandomJoke());
  
  chuck.displayInfo();
  