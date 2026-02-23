
const carro = {
    marca: "",
    modelo: "",
    ano: "",
    exibirDados: function() {
        const dados = `Carro cadastrado: ${this.marca} ${this.modelo}, ano ${this.ano}.`;

        document.getElementById("dadosCarro").innerText = dados;
    }
};

function cadastrarEExibir() {

    const marcaInput = document.getElementById("marca").value;
    const modeloInput = document.getElementById("modelo").value;
    const anoInput = document.getElementById("ano").value;

    carro.marca = marcaInput;
    carro.modelo = modeloInput;
    carro.ano = anoInput;

    
    carro.exibirDados();
}