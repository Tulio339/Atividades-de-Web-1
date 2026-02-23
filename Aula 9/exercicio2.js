
    const frutas = [];


    const inputFruta = document.getElementById('inputFruta');
    const btnAdicionar = document.getElementById('btnAdicionar');
    const btnOrdenar = document.getElementById('btnOrdenar');
    const btnExibir = document.getElementById('btnExibir');
    const lista = document.getElementById('listaDeFrutas');

    function adicionarFruta() {
        const nomeDaFruta = inputFruta.value.trim();

        if (nomeDaFruta) {
            frutas.push(nomeDaFruta);
            alert(`'${nomeDaFruta}' foi adicionado. Clique em "Exibir Frutas" para ver a lista atual.`);
            inputFruta.value = ''; 
            inputFruta.focus();   
        } else {
            alert('Por favor, digite o nome de uma fruta.');
        }
    }

    function ordenarFrutas() {
        if (frutas.length === 0) {
            alert('A lista está vazia. Adicione algumas frutas antes de ordenar.');
            return;
        }
        frutas.sort();
        alert('A lista de frutas foi ordenada em memória! Clique em "Exibir Frutas" para ver o resultado.');
    }

    
    function exibirFrutas() {
        lista.innerHTML = ''; 

        if (frutas.length === 0) {
            lista.innerHTML = '<li>Nenhuma fruta na lista para exibir.</li>';
            return;
        }

        frutas.forEach(fruta => {
            const item = document.createElement('li');
            item.textContent = fruta;
            lista.appendChild(item);
        });
    }

    btnAdicionar.addEventListener('click', adicionarFruta);

    btnOrdenar.addEventListener('click', ordenarFrutas);

    btnExibir.addEventListener('click', exibirFrutas);
    
    inputFruta.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            adicionarFruta();
        }
    });

