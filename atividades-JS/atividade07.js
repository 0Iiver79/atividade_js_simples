//7 . Switch Case – Calculadora simples

let operadores = prompt("Escolha a operação matemática (+, -, *, /): ");

switch (operadores) {
  case "+":
    let soma1 = parseFloat(prompt("Digite o primeiro número para somar: "));
    let soma2 = parseFloat(prompt("Digite o segundo número para somar: "));
    alert("O resultado da soma é: " + (soma1 + soma2));
    break;
  case "-":
    let sub1 = parseFloat(prompt("Digite o primeiro número para subtrair: "));
    let sub2 = parseFloat(prompt("Digite o segundo número para subtrair: "));
    alert("O resultado da subtraçao  é : " + (sub1 - sub2));
    break;
  case "*":
    let mult1 = parseFloat(
      prompt("Digite o primeiro número para multiplicar: ")
    );
    let mult2 = parseFloat(
      prompt("Digite o segundo número para multiplicar: ")
    );
    alert("O resultado da multiplicaçao é: " + mult1 * mult2);
    break;
  case "/":
    let div1 = parseFloat(prompt("Digite o primeiro número para dividir: "));
    let div2 = parseFloat(prompt("Digite o segundo número para dividir: "));
    alert("O resultado da divisao é: " + div1 / div2);
    break;
  default:
    alert("Operação inválida. Por favor, escolha entre +, -, * ou /.");
    break;
}
