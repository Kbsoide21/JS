// 1. Investiga como crear un numero aleatorio (0 o 1) con el método random de math.

console.log(Math.random(0, 1));
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(2));

// 2. Investiga como redondear el valor de Math.PI 3,1415... a la parte decimal 3.

console.log(Math.round(Math.PI));