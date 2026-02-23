function criarCampos() {
    const quantidade = document.getElementById("qtd_pessoas").value;
    const camposDiv = document.getElementById("campos");

    camposDiv.innerHTML = '';
    if (quantidade > 0) {
    
        for (let i = 1; i <= quantidade; i++) {
            camposDiv.innerHTML += `
                <div style="margin-bottom: 10px;">
                    <strong>Pessoa ${i}:</strong><br>
                    <input type="number" id="idade_${i}" placeholder="Idade da pessoa ${i}">
                    <input type="number" id="peso_${i}" placeholder="Peso (kg) da pessoa ${i}">
                </div>
            `;
        }
        
        document.getElementById("btn_calcular").style.display = "block";
    } else {
        
        document.getElementById("btn_calcular").style.display = "none";
    }
}


function calcularMediaPeso() {
    const quantidade = document.getElementById("qtd_pessoas").value;

    
    let totalPeso1 = 0, qtd1 = 0; 
    let totalPeso2 = 0, qtd2 = 0; 
    let totalPeso3 = 0, qtd3 = 0; 
    let totalPeso4 = 0, qtd4 = 0; 


    for (let j = 1; j <= quantidade; j++) {
    
        const idade = parseInt(document.getElementById(`idade_${j}`).value);
        const peso = parseFloat(document.getElementById(`peso_${j}`).value);

        if (isNaN(idade) || isNaN(peso)) {
            alert(`Por favor, preencha os dados corretamente para a Pessoa ${j}.`);
            return; 
        }

        if (idade >= 1 && idade <= 10) {
            qtd1++;
            totalPeso1 += peso;
        } else if (idade >= 11 && idade <= 20) {
            qtd2++;
            totalPeso2 += peso;
        } else if (idade >= 21 && idade <= 30) {
            qtd3++;
            totalPeso3 += peso;
        } else {
            qtd4++;
            totalPeso4 += peso;
        }
    }

   
    let media1, media2, media3, media4;


    if (qtd1 > 0) {
        media1 = (totalPeso1 / qtd1).toFixed(2);
    } else {
        media1 = "Nenhuma pessoa nesta faixa";
    }


    if (qtd2 > 0) {
        media2 = (totalPeso2 / qtd2).toFixed(2);
    } else {
        media2 = "Nenhuma pessoa nesta faixa";
    }
    if (qtd3 > 0) {
        media3 = (totalPeso3 / qtd3).toFixed(2);
    } else {
        media3 = "Nenhuma pessoa nesta faixa";
    }
    if (qtd4 > 0) {
        media4 = (totalPeso4 / qtd4).toFixed(2);
    } else {
        media4 = "Nenhuma pessoa nesta faixa";
    }


    const resultadoDiv = document.getElementById("resultado");
    
    let htmlResultado = '<h3>Resultados das Médias de Peso:</h3>';

    if (qtd1 > 0) {
        htmlResultado += `<p><b>De 1 a 10 anos:</b> ${media1} kg</p>`;
    } else {
        htmlResultado += `<p><b>De 1 a 10 anos:</b> ${media1}</p>`;
    }

    if (qtd2 > 0) {
        htmlResultado += `<p><b>De 11 a 20 anos:</b> ${media2} kg</p>`;
    } else {
        htmlResultado += `<p><b>De 11 a 20 anos:</b> ${media2}</p>`;
    }

    if (qtd3 > 0) {
        htmlResultado += `<p><b>De 21 a 30 anos:</b> ${media3} kg</p>`;
    } else {
        htmlResultado += `<p><b>De 21 a 30 anos:</b> ${media3}</p>`;
    }
    
    if (qtd4 > 0) {
        htmlResultado += `<p><b>Maiores de 30 anos:</b> ${media4} kg</p>`;
    } else {
        htmlResultado += `<p><b>Maiores de 30 anos:</b> ${media4}</p>`;
    }

    resultadoDiv.innerHTML = htmlResultado;

}