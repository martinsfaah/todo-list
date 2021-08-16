// requisito 5 e 7 e 8
const inputTextoTarefa = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('criar-tarefa');

const listaTarefas = document.getElementById('lista-tarefas');
const tarefas = document.getElementsByClassName('tarefa');

function selectTarefa(event) {
  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[i].className === 'tarefa selected') {
      tarefas[i].className = 'tarefa';
    }
  }

  const clickedItem = event.target;
  clickedItem.className += ' selected';
}
function criaTarefa() {
  const tarefa = document.createElement('li');
  tarefa.innerHTML = inputTextoTarefa.value;
  tarefa.className = 'tarefa';
  tarefa.addEventListener('click', selectTarefa);

  listaTarefas.appendChild(tarefa);
  inputTextoTarefa.value = '';
}
btnCriarTarefa.addEventListener('click', criaTarefa);
