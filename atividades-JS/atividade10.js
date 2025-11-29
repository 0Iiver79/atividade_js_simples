//10. If / Else Sistema de login simples

console.log("Login: MagoADM | Senha: 123345");

let loginUser = prompt("Digite seu login: ");
let senhaUser = prompt("Digite sua senha: ");
if (loginUser === "MagoADM" && senhaUser === "123345") {
  alert("Login bem-sucedido!");
} else {
  alert("Login ou senha incorretos.");
}