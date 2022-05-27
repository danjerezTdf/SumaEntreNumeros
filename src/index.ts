/* Suma entre Números
• Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27 */

let valorUno: number = Number(prompt(`ingrese primer Numero:`));
let valorDos: number = Number(prompt(`ingrese segundo Numero`));
let auxUno: number = 0;
let auxDos: number = 0;

if (valorUno > valorDos) {
  auxUno = valorDos;
  valorDos = valorUno;
  valorUno = auxUno;
}
for (valorUno; valorUno <= valorDos; valorUno++) {
  auxDos = auxDos + valorUno;
  // console.log(auxDos);
}
console.log(auxDos);
