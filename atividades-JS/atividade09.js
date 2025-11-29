//9. If / Else – Verificador de múltiplos

let num1 = prompt("Digite o primeiro número: ");
let num2 = prompt("Digite o segundo número: ");

if(isNaN(num1) || isNaN(num2)){
    alert("Por favor, digite apenas números.");
}else if( num1 % num2 === 0){
    alert("O primeiro número é múltiplo do segundo.");
}else{
    alert("O primeiro número não é múltiplo do segundo.");
}