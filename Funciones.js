//Function con/sin parámetros y arrow.
function consin () {
    // Funcion sin parametros
    function saludar () {
        console.log('Hola');
    }
    // Llamada a la función
    saludar();


    //Funcion con parámetros
    function saludar2 (name,surname) {
        console.log("Hola " + name + ' ' + surname);
    }
    // Llamada a la funcion
    saludar2('Daniel', 'Rojo Comas');


    // Función anónima
    const saludar3 = function() {
        console.log("Hola anónimo");
    };
    // Llamada a la funcion
    saludar3();


    // Función anónima con parámetros
    const saludar4 = function(name,surname) {
        console.log("Hola " + name + ' ' + surname);
    };
    saludar4("Daniel", "Rojo Comas anónimo con parámetros");


    // Función anónima arrow
    const saludar5 = () => {
        console.log("Hola arrow");
    }
    saludar5();


    // Función arrow con parámetros
    const saludar6 = (name,surname) => {
        console.log("Hola " + name + ' ' + surname);
    };
    // Llamada a la función
    saludar6("Daniel", "Rojo Comas arrow con parámetros");


    // Parámetros ilimitados en una función
    const saludar7 = function(...valores){
        valores.forEach(element =>{
            console.log(element)
        });
    };
    saludar7('Tambien','Se','Puede','Hacer','infinitas','Veces');
}

//Funciones con return
const saludar = (name) => {
    return name;
};
console.log(saludar('Daniel')); 
const respuesta  = saludar('Daniel');
console.log(respuesta);
function guardarenBBDD(name) {
    console.log(name);
}
guardarenBBDD(saludar('Daniel'));