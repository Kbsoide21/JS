function primerosTres() {
  // 1. Realiza un bucle tanto con FOR como con WHILE que imprima 10 veces " I love code"

  for (let i = 0; i < 10; i++) {
    console.log("I <3 code");
  }
  let i = 0;
  while (i < 10) {
    console.log("I <3 code");
    i++;
  }

  // 2. Define un array con las letras a,b,c,d y e. Y, posteriormente, recorre cada uno de los elementos mediante un forEach.

  const array = ["a", "b", "c", "d", "e"];
  array.forEach((item) => {
    console.log(item);
  });

  // 3. Define una variable let numero = 5; que itere hasta que el valor sea 0.

  for (let numero = 5; numero > 0; numero--) {
    console.log(numero);
  }
}
// 4. Analiza que hace el siguiente programa, explica lo que hace ¿Cuantas iteraciones da? ¿Cuándo entrará en el if? ¿Y en el else?:
let numero = 1;
let I = 0;
do {
  if (I === 0) {
    I++;
    numero--;
    console.log(numero);
  } else {
    numero++;
    console.log(numero);
  }
} while (numero < 5);
