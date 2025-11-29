//2. If / Else – Verificador de maioridade

let idadeUser = prompt("Verificador de maioridade: ");
let idade = parseInt(idadeUser);

if (isNaN(idade)) {
  alert("Por favor, digite apenas números.");
} else if (idade >= 18) {
  alert("Você é maior de idade.");
} else {
  alert("Você é menor de idade.");
}
