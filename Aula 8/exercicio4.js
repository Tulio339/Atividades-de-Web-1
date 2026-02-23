
const maxCampos = 10;
let camposCriados = 0;
const container = document.getElementById('inserir');
const resultadoDiv = document.getElementById('resultado');


function addCampo() {
    
    if (camposCriados >= maxCampos) {
        return;
    }

    camposCriados++;

    const novoInput = document.createElement("input");
    novoInput.type = "number";
    novoInput.placeholder = `Temperatura ${camposCriados} (°C)`;
    novoInput.className = 'temp-input'; 
    novoInput.id = `campo${camposCriados}`;


    container.appendChild(novoInput);

    if (camposCriados < maxCampos) {
        novoInput.addEventListener('input', addCampo, { once: true });
    } else {
   
        document.getElementById('btn-calcular').style.display = 'block';
    }
}


function calcularTemperatura() {
    const inputs = document.querySelectorAll('.temp-input'); 
    const temperaturas = [];

    inputs.forEach(input => {
        const valor = parseFloat(input.value);
        if (!isNaN(valor)) {
            temperaturas.push(valor);
        }
    });

    if (temperaturas.length < maxCampos) { 
        resultadoDiv.innerHTML = `<p style="color: red;">Por favor, preencha todos os ${maxCampos} campos com valores válidos.</p>`;
        return;
    }


    const menor = Math.min(...temperaturas);
    const maior = Math.max(...temperaturas);
    const soma = temperaturas.reduce((acumulador, valor) => acumulador + valor, 0);
    const media = soma / temperaturas.length;

    
    resultadoDiv.innerHTML = `
        <p><strong>Temperatura Mínima:</strong> ${menor}°C</p>
        <p><strong>Temperatura Máxima:</strong> ${maior}°C</p>
        <p><strong>Média das Temperaturas:</strong> ${media.toFixed(2)}°C</p>
    `;
}

addCampo();