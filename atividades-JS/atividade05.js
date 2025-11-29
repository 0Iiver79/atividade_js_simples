//5. If / Else – Verificador de nota escolar

let Nota = prompt("Digite sua nota de 0 a 10: ");

if(isNaN(Nota)){
    alert("Por favor, digite apenas números.");
}else if(Nota <= 4){
    alert("Nota baixa");
}else if(Nota >= 5 && Nota <= 7){
    alert("Nota média");
}else if(Nota >= 8 && Nota <= 10){
    alert("Nota alta");
}else{
    alert("Nota inválida, digite uma nota entre 0 e 10.");
}