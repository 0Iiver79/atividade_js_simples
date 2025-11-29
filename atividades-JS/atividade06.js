//6. If / Else – Calculadora de IMC (Índice de Massa Corporal)
//Fonte IMC : https://www.programasaudefacil.com.br/calculadora-de-imc

let userPeso = prompt("Digite seu peso em kg: ");
let userAltura = prompt("Digite sua altura em metros: Exemplo - 1.70");

let peso = parseFloat(userPeso);
let altura = parseFloat(userAltura);
let imc = peso / (altura * altura);

if (isNaN(peso) || isNaN(altura)) {
  alert("Por favor, digite apenas números.");
} else if (imc < 18.5) {
  alert("Sua classificação de IMC é: Abaixo do peso.");
} else if (imc >= 18.5 && imc <= 24.9) {
  alert("Sua classificação de IMC é: Peso normal.");
} else if (imc >= 25 && imc <= 29.9) {
  alert("Sua classificação de IMC é: Sobrepeso.");
} else if (imc >= 30 && imc <= 34.9) {
  alert("Sua classificação de IMC é: Obesidade grau 1.");
} else if (imc >= 35 && imc <= 39.9) {
  alert("Sua classificação de IMC é: Obesidade grau 2.");
} else {
  alert("Sua classificação de IMC é: Obesidade grau 3.");
}
