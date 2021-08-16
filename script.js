// requisito 5 e 7
const inputTextoTarefa = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('criar-tarefa');

const listaTarefas = document.getElementById('lista-tarefas');

function changeBkgColor(event) {
  const clickedItem = event.target;
  clickedItem.style.backgroundColor = 'rgb(128,128,128)';
}
function criaTarefa() {
  const tarefa = document.createElement('li');
  tarefa.innerHTML = inputTextoTarefa.value;
  tarefa.className = 'tarefa';
  tarefa.addEventListener('click', changeBkgColor);

  listaTarefas.appendChild(tarefa);
  inputTextoTarefa.value = '';
}
btnCriarTarefa.addEventListener('click', criaTarefa);
