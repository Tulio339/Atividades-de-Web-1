 function showMessage() {
 const ensino = document.getElementsByName("Ensino");
 let selecionado = "";
 for (let ensinos of ensino) {
 if (ensinos.checked) {
 selecionado = ensinos.value;
 break;
 }
 }
 document.getElementById("Opcoes").innerText = "Ensino: " + selecionado;
 }