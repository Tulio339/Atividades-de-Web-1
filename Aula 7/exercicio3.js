function calcularMedia(){
 let notas1 = parseFloat(document.getElementById("nota1").value);
 let notas2 = parseFloat(document.getElementById("nota2").value);
 let notas3 = parseFloat(document.getElementById("nota3").value);
 let media = (notas1 + notas2 + notas3) / 3;
 let msg;
 msg = "A média é: " + media.toFixed(2);

    document.getElementById("resultado").innerText = msg;

}