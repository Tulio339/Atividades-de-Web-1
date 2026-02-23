class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Nome: ${this.nome}, Idade: ${this.idade} anos.`;
    }
}
function criarEExibirPessoa() {
    const nomeUsuario = document.getElementById("nome").value;
    const idadeUsuario = document.getElementById("idade").value;
    const pessoa1 = new Pessoa(nomeUsuario, idadeUsuario);
    const paragrafoMensagem = document.getElementById("mensagem");
    paragrafoMensagem.innerText = pessoa1.apresentar();
}