// Requisito 5 -
const inputTextoTarefa = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('criar-tarefa');

const listaTarefas = document.getElementById('lista-tarefas');

function criaTarefa() {
  const tarefa = document.createElement('li');
  tarefa.innerHTML = inputTextoTarefa.value;

  listaTarefas.appendChild(tarefa);
  inputTextoTarefa.value = '';
}
btnCriarTarefa.addEventListener('click', criaTarefa);
