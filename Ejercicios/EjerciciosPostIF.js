//1. A partir de la siguiente instrucción que genera un número aleatorio `console.log(Math.round(Math.random()));` que genera un número aleatorio 0 o 1. Haz una función con return, invócala y muestra por consola cara si el valor es 1 y cruz si el valor es 0.
function caraocruz () {
    const aleatorio = () => {
        const numero = Math.round(Math.random());
        return numero;
    }

    const numero = aleatorio(); // Llamas a la función aleatorio para obtener el número

    console.log(numero); // Muestra el número generado

    if (numero === 1) {
        console.log("Has sacado cruz");
    } else {
        console.log("Has sacado cara");
    }
}

//1. Crea una función pasa 3 números por parámetros súmalos y devuelve el resultado mediante a return. Finalmente muéstralos por pantalla.
function suma(num1,num2,num3) {
    const resultado = Number(num1) + Number(num2) + Number(num3);
    return console.log(resultado);
}
suma(3,6,9);

//2. Crea una función y escribe tu nombre completo en 3 parámetros: nombre, apellido1, apellido2 y concaténalos y finalmente muéstralos por pantalla.
function miNombre(name,surname,surname2) {
    console.log("Hola mundo, mi nombre es " + name + ' ' + surname + ' ' + surname2);
}
miNombre('Daniel','Rojo','Comas');


//3. Crea una función que acepte dos números y devuelva el número mayor.
function mayor(num1,num2) {
    if (num1>num2){
        console.log("El numero más grande es " + num1);
    }else{
        console.log("El numero más grande es " + num2);
    }
}
mayor(2,10);