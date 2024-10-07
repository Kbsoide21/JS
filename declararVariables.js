var nombre; //Declarar variable
nombre = "Daniel"; //Inicializar el valor
console.log(typeof(nombre)); //Ver que tipo de variable es
const PI = 3.141516; //Variable constante
var y = "Variable global Y" // Variable global Y

function foo () {
    let y = "Variable local Y"; //Variable local Y
    console.log(y); //Variable local y
}
foo();
console.log(y);  //Variable global y
console.log(PI); //Variable constante

function foo2() {
    var a =50; //Variable local 50
    console.log(a); //Imprime 50
    for (var a = 0; a < 10; a++) {
        console.log(a); //Imprime 0,1,2,3...
    }
    console.log(a); //Imprime 50
}
foo2();