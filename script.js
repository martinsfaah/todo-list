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
const buttonApagaTudo = document.getElementById('apaga-tudo');
buttonApagaTudo.addEventListener('click', apagaTudo);
function apagaTudo () {
    let tarefas = document.getElementsByClassName('tarefa');
    let listaTarefas = document.getElementById('lista-tarefas');
    for (let index = tarefas.length-1; index >= 0; index -=1) {
        listaTarefas.removeChild(tarefas[index]);
    }
}
const buttonRemoveFinalizados = document.getElementById('remover-finalizados');
buttonRemoveFinalizados.addEventListener('click', apagaFinalizados);
function apagaFinalizados () {
    let finalizados = document.getElementsByClassName('completed');
    let listaTarefas = document.getElementById('lista-tarefas');
    for (let index = finalizados.length-1; index >= 0; index -=1) {
        listaTarefas.removeChild(finalizados[index]);
    }
}