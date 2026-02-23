function enviarDados(){
    let name = document.getElementById("nome").value;
    let altura = parseFloat(document.getElementById("altura").value);
    let idade = parseInt(document.getElementById("idade").value);

    if((idade >= 18 && idade <= 35) && (altura >= 1.86)){
        document.getElementById("resultado").innerHTML = `<p>${name}, você eh bom.</p>`;
    } else {
        document.getElementById("resultado").innerHTML = `<p>sua idade eh ${idade}, sua altura eh ${altura}.</p>`;
    }
}