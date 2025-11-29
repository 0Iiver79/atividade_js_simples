//4. If / Else – Comparador de dois números

let Num1 = prompt("Digite o primeiro número: ");
let Num2 = prompt("Digite o segundo número: ");

if (isNaN(Num1) || isNaN(Num2)) {
  alert("Por favor, digite apenas números.");
} else if (Num1 > Num2) {
  alert("O primeiro número é maior que o segundo.");
} else if (Num1 < Num2) {
  alert("O segundo número é maior que o primeiro.");
} else {
  alert("Os dois números são iguais.");
}
