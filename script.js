const buttonCriar = document.getElementById('criar-tarefa');
buttonCriar.addEventListener('click', addTarefa);
function addTarefa () {
    let inputValue = document.getElementById('texto-tarefa').value;
    if (inputValue.length === 0) {
        alert('Campo vazio! Adicione uma tarefa.');
    } else {
        let itemLista = document.createElement('li');
        itemLista.innerText = inputValue;
        itemLista.className = 'tarefa';
        let listaPai = document.getElementById('lista-tarefas');
        listaPai.appendChild(itemLista);
        document.getElementById('texto-tarefa').value='';
    }
}