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
const listaTarefas = document.getElementById('lista-tarefas');
listaTarefas.addEventListener('click', selecionaTarefa);
function selecionaTarefa (event) {
    let selected = document.querySelector('.selected');
    if (!document.querySelector('.selected')) {
        event.target.classList.add('selected');
    } else {
        selected.classList.remove('selected');
        event.target.classList.add('selected');
    }

}
listaTarefas.addEventListener('dblclick', completaTarefa);
function completaTarefa (event) {
    if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
    } else {
        event.target.classList.add('completed');
    }
}
