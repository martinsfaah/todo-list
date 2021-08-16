let listaTarefas = document.getElementById('lista-tarefas');
let tarefasInput = document.getElementById('texto-tarefa');
let buttonCriaTarefa = document.getElementById('criar-tarefa');

buttonCriaTarefa.addEventListener('click', criaTarefa);

function criaTarefa() {
    let tarefas = document.createElement('li');
    tarefas.innerText = tarefasInput.value;
    listaTarefas.appendChild(tarefas);
    tarefasInput.value = '';
    
}