//1. A partir de la pizza sustituías todos los elementos del array por cervezas: 🍔🍺🍜🍔🍕🍜🍪🍗

const array1 = ["🍔", "🍺", "🍜", "🍔", "🍕", "🍜", "🍪", "🍗"];
console.log(array1.fill("🍺", 5, array1.length));

//2. Encontrar si existe un elemento en el array que sea una piña. 🍕🍕🍍🍕🍕🍕

const array2 = ["🍕", "🍕", "🍍", "🍕", "🍕"];
console.log(array2.indexOf("🍍"));

//3. Quita la piña del siguiente array. 🍕🍕🍍🍕🍕

const array3 = ["🍕", "🍕", "🍍", "🍕", "🍕"];
array3.splice(2, 1);
console.log(array3);

//4. A partir del siguiente array 🍓🍑🍓🍑🍓 convierte todas las fresas en 🍄
function convertirFresasASetas(array4) {
  return array4.map((elemento) => (elemento === "🍓" ? "🍄" : elemento));
}
const array4 = ["🍓", "🍑", "🍓", "🍑", "🍓"];
console.log(convertirFresasASetas(array4));

//5. Añade el siguiente icono 🍪 inmediatamente después del cada 🌶 en el siguiente array: 🌶🍹🌶🍹🌶🍹

const array5 = ["🌶", "🍹", "🌶", "🍹", "🌶", "🍹"];
function agregarGalletaDespuesDeChile(array5) {
  let nuevoArray = [];

  array5.forEach((elemento) => {
    nuevoArray.push(elemento); // Añadir el elemento original
    if (elemento === "🌶") {
      // Si es un chile, añadir también una galleta después
      nuevoArray.push("🍪");
    }
  });

  return nuevoArray;
}
console.log(agregarGalletaDespuesDeChile(array5));

//6. Añade una 🃏 cartas comodín entre medio de dos cartas. Por ejemplo: 🂡🃏🂡 En el siguiente array: 🂡🂡🂡🃏🂡🂡🂡

const array6 = ['🂡', '🂡', '🂡', '🃏', '🂡', '🂡', '🂡'];

function agregarComodinEntreCartas(array6) {
    let nuevoArray = [];
    
    for (let i = 0; i < array6.length; i++) {
        nuevoArray.push(array6[i]);  // Añadir la carta actual al nuevo array
        // Si la siguiente carta existe y es igual a la carta actual, insertar comodín
        if (array6[i] === array6[i+1]) {
            nuevoArray.push('🃏');
        }
    }
    
    return nuevoArray;
}
console.log(agregarComodinEntreCartas(array6));  


