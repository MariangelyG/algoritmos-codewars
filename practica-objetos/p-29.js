/*Su tarea es crear un constructor Circle que cree un círculo con un radio proporcionado por un argumento. 
Los círculos construidos deben tener dos métodos getArea()(PI * r^2) y getPerimeter()(2 * PI * r) 
que dan las áreas y el perímetro (circunferencia) respectivos.

Para obtener ayuda con esta clase, le he proporcionado un constructor Rectangle que puede usar como ejemplo base.

Ejemplos
let circy = new Circle(11)
circy.getArea()

// Should return 380.132711084365
let circy = new Circle(4.44)
circy.getPerimeter()

// Should return 27.897342763877365*/

class Circle {
  
    constructor(getArea, getPerimeter){
        this.name = "Circle"
        this.getArea = getArea
        this.getPerimeter = getPerimeter
    }
 
    get Area(){
        return (Math.PI * Math.sqrt(Math.PI ))}
    get Perimeter(){
        return (2 * Math.PI * Math.sqrt(Math.PI))}
    }

    let q = new Circle(4.44);
    console.log(q(getArea()));
    console.log(q(getPerimeter()));




// console.log((circo.getArea()));
// console.log((circo.getPerimeter()), 125.66371);


