function criarCampos() {
    let quantidade = document.getElementById("qtd_valores").value;
    let camposDiv = document.getElementById("campos");

    camposDiv.innerHTML = '';
    if (quantidade > 0) {
    
        for (let i = 1; i <= quantidade; i++) {
            camposDiv.innerHTML += `
                <div>
                    <strong>Valor: ${i}:</strong><br>
                    <input type="number" id="valor_${i}" placeholder="Valor ${i}">
                </div>
            `;
        }
        
        document.getElementById("btn_calcular").style.display = "block";
    } else {
        
        document.getElementById("btn_calcular").style.display = "none";
    }
}


function calcularMedia() {
    let quantidade = document.getElementById("qtd_valores").value;
    let media=0;
    let numPositivos = 0;
    let numNegativos = 0;


    for (let j = 1; j <= quantidade; j++) {

        const valor = parseInt(document.getElementById(`valor_${j}`).value);

        if (isNaN(valor)){
            alert(`Por favor, preencha os dados corretamente para a Pessoa ${j}.`);
            return; 
        }
     
        if (valor > 0) {
            numPositivos++;
        } else {
            numNegativos++;
        }
        media += valor;
          
    }

   media = media / (numPositivos + numNegativos);

    const resultadoDiv = document.getElementById("resultado");
    
    let htmlResultado = '<h3>Resultados:</h3>';

    htmlResultado += `<p>Total de Valores: ${quantidade}</p>`;
    htmlResultado += `<p>Total de valores positivo: ${numPositivos}</p>`;
    htmlResultado += `<p>Total de valores negativo: ${numNegativos}</p>`;
    htmlResultado += `<p>Média de valores: ${media}</p>`;

    resultadoDiv.innerHTML = htmlResultado;

}