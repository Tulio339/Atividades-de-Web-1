 function verificarNota() {
 let nota = parseFloat(document.getElementById("nota").value);
 let mensagem;
 if (nota >= 90 && nota <= 100) {
 mensagem = "Excelente";
 } else if (nota >= 60 && nota < 90) {
 mensagem = "Bom";

 } 
 else if(nota <0 || nota >100){

 mensagem = "Valor Inválido, insira um valor entre 0 e 100";

 }
    else {
 mensagem = "Precisa Melhorar";
 }
 document.getElementById("desempenho").innerText = mensagem;
 }