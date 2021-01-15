/**
 * Create a class Rectangle with:
* A property width
* A property height
* A method constructor(width,height)
* A method calculatePerimeter()
* A method calculateArea()

* Create a class Square that extends Rectangle add with:
* A property side (equals to the width and height)
* A method constructor(side)
*/


class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    calculatePerimeter(){
        return (this.width + this.height)*2;
    }
    calculateArea(){
        return this.width * this.height;
    }
}
  
class Square extends Rectangle {
    constructor(side){//ici pas besoin de width et height en plus de side pour définir un square
        super(side, side);//ici on affecte la VALEUR de side aux PROPRIETES width et height de la classe mère Rectangle
        this.side = side;
    }
}

var r1 = new Rectangle(6,7)
console.log('Perimeter of r1 =', r1.calculatePerimeter()) // 26
console.log('Area of r1 =', r1.calculateArea()) // 42

var s1 = new Square(5)
console.log('Perimeter of s1 =', s1.calculatePerimeter()) // 20
console.log('Area of s1 =', s1.calculateArea()) // 25
//Les propriétés width et height héritées de Rectangle sont appelées par la méthode calculatePerimeter(), mais elles contiennent la valeur de side grâce aux paramètres passés dans le constructeur de square
var s2 = new Square(10)
console.log('Perimeter of s2 =', s2.calculatePerimeter()) // 40
console.log('Area of s2 =', s2.calculateArea()) // 100
//idem