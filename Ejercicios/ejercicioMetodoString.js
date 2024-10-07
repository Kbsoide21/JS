// 1. Crea una función en la que pasándole un string como parámetro se sustituyan las letras A por las O.

let palabra = "Atlanta"; //Declaramos la palabra

function reemplazo(palabra) { //Hacemos la función que corresponde
    return palabra.split('A').join('O').split('a').join('o'); //Con este return y la función split separamos la palabra y con el join introducimos las o por las a
}
console.log(reemplazo(palabra));

// 2. Crea una función que compruebe si un string pasado como parámetro empieza por ‘aca’ y llama dos veces a la función una con academia y otra con escuela.

function empieza(palabreo) {
    return palabreo.startsWith('Aca');
}
console.log(empieza("Academia"));
console.log(empieza("Escuela"));

// 3. Crea una función que pasándole un Hola nos salude 3 veces utilizando métodos de Strings.

function saludar(saludo) {
    return saludo.repeat(3);
}
console.log(saludar('Hola '));