//3. If / Else – Verificador de número par ou ímpar

let verificador = prompt("Veriicador de numero par ou impar: ");
let numero = parseInt(verificador);

if (isNaN(numero)) {
  alert("Por favor, digite apenas números.");
} else if (numero % 2 === 0) {
  alert("O número é par.");
} else {
  alert("O numero é ímpar.");
}
