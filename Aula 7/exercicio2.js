function verificarMMes(){
    let mes = document.getElementById("mes").value;
    let mensagem;
    switch(mes) {
        case "1":
            mensagem = "Mês 1: Janeiro";
            break;
        case "2":
            mensagem = "Mês 2: Fevereiro";  
            break;
        case "3":
            mensagem = "Mês 3: Março";
            break;
        case "4":
            mensagem = "Mês 4: Abril";
            break;
        case "5":
            mensagem = "Mês 5: Maio";
            break;
        case "6":
            mensagem = "Mês 6: Junho";
            break;
        case "7":
            mensagem = "Mês 7: Julho";
            break;
        case "8":
            mensagem = "Mês 8: Agosto";
            break;
        case "9":
            mensagem = "Mês 9: Setembro";
            break;
        case "10":
            mensagem = "Mês 10: Outubro";
            break;
        case "11":
            mensagem = "Mês 11: Novembro";
            break;
        case "12":
            mensagem = "Mês 12: Dezembro";
            break;
        default:
            mensagem = "Mês inválido";
            break;
    }
    document.getElementById("resultado").innerHTML = mensagem;
}