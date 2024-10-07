// 1. Realiza un switch case que muestre el mes del año cuando lo introduzcamos en formato numérico (1 al 12)

let variable = 8; //Declaramos la variable en 1

switch (variable) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Septiembre");
        break;
    case 10:
        console.log("Octubre");
        break;
    case 11:
        console.log("Noviembre");
        break;
    case 12:
        console.log("Diciembre");
        break;
    
    default:
        console.log("Error, el número no esta asignado a un mes del año");
        break;
}

// 2. Realiza un switch case en el que puedas introducir un número del uno al cinco en un string y lo transforme a un número

var numero = "Dos";

switch (numero) {
    case "Uno":
        console.log(1);
        break;
    case "Dos":
        console.log(2);
        break;
    case "Tres":
        console.log(3);
        break;
    case "Cuatro":
        console.log(4);
        break;
    case "Cinco":
        console.log(5);
        break;

    default:
        console.log("Error, el numero no está en el rango")
        break;
}