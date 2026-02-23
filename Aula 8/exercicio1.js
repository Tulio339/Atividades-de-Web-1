function calculadora(){
     let x = parseFloat(document.getElementById("valor1").value);
     let y = parseFloat(document.getElementById("valor2").value);
     let operacao = document.getElementById("operacao").value;


     if(operacao == "+"){
        document.getElementById("resultado").innerHTML = "Resultado: " + (x + y);
     }
     else if(operacao == "-"){
        document.getElementById("resultado").innerHTML = "Resultado: " + (x - y);
     }
     else if(operacao == "*"){
        document.getElementById("resultado").innerHTML = "Resultado: " + (x * y);
     }
     else if(operacao == "/"){
        document.getElementById("resultado").innerHTML = "Resultado: " + (x / y);
     }
     
}