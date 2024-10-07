let variable = 10; //Declaramos la variable en 1

switch (variable) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    
    default:
        console.log("Error, el número no esta en el siguiente rango: 1-3");
        break;
}

//Swithc con varios condiciones
let diaSemana = 3; //Declaramos un jueves

switch (diaSemana) {
    case 1: case 2: case 3: case4: case5:
        console.log("Laborable");
        break;

    case6: case7:
        console.log("No laborable");
        break;

    default:
        console.log("Ese numero no correspone a ningun dia");
        break;
}