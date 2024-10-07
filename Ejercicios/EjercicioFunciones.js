// 1. Crea una function arrow que retorne tu nombre y tus apellidos e imprímelos por pantalla des de fuera de la función

const saludar = (name,surname) => {
    console.log("Hola " + name + ' ' + surname);
};
// Llamada a la función
saludar("Daniel", "Rojo Comas");

// 2. Crea una function con nombre y sin return. Pásale un tipo de dato boolean y dentro de la función imprime el valor que 
//Hemos pasado por los parámetros.

function booleana (valor) {
    console.log(valor);
}
booleana('Hola');

//3. Crea una function que reciba parámetros infinitos, haz la llamada con los valores 1-5 y muéstralos mediante un forEach
    // Parámetros ilimitados en una función
    const saludar7 = function(...valores){
        valores.forEach(element => {
            console.log(element)
        });
    };
    saludar7('1','2','3','4','5');