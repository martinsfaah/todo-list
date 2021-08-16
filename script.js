const btAdd = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

function addTarefa(){
  const input = document.querySelector('#texto-tarefa');
  let tarefaAdicionada = document.createElement('li');
  tarefaAdicionada.innerHTML = input.value;
  input.value = '';
  listaTarefas.appendChild(tarefaAdicionada);
}

btAdd.addEventListener('click', addTarefa);