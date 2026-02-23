function showMeTheNumbers() {
    let list = document.getElementById("output");
    list.innerHTML = ""; 
    for(let i=1; i<=10;i++){
        list.innerHTML += `<li>${i}</li>`;
    }
    document.getElementById("button").style.display = "none";
}