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
