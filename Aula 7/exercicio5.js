const precos = {
    alface: 0.30, presunto: 0.70, peito: 1.00,
    azeitona: 0.50, tomate: 0.50, queijo: 1.00,
    ovo: 0.50, milho: 0.30, peitoF: 2.00
};
function mostrarGasto() {
 const checkboxes = document.getElementsByClassName("ingrediente");
 let selecionados = [];
 let valorTotal=4.0;
 for (let box of checkboxes) {
 if (box.checked) {
 selecionados.push(box.id);
 valorTotal += precos[box.id]; 
 }
 }
 const valorFormatado = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
  document.getElementById("valor-final").innerText ="Ingredientes: " + selecionados.join(", ") + "\nPreço Final: " + valorFormatado;
 }