//1. Declara la variable y posteriormente inicialízala

var nombre; //Declaro
nombre = "Daniel"; //Inicializo

//2. Imprime por consola el valor de la variable

console.log(typeof(nombre)); //typeof para ver que tipo de variable es

//3. Ahora imprime el dato que almacena por consola

console.log(nombre); //Imprimo con console.log

//4. Declarar variable con scope global y con scope local

var y = "Variable global Y" // Declaro variable global Y

function foo () {
    let y = "Variable local Y"; //Variable local Y
    console.log(y); //Variable local y
}
foo();
console.log(y);  //Variable global y