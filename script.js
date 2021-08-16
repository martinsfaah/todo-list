// requisito 5, 7, 8 e 9
const inputTextoTarefa = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('criar-tarefa');

const listaTarefas = document.getElementById('lista-tarefas');
const tarefas = document.getElementsByClassName('tarefa');

function completeTarefa(event) {
  const dblclickedItem = event.target;

  if (dblclickedItem.className.includes(' completed')) {
    dblclickedItem.className = dblclickedItem.className.replace(' completed', '');
  } else {
    dblclickedItem.className += ' completed';
  }
}

function selectTarefa(event) {
  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[i].className.includes(' selected')) {
      tarefas[i].className = tarefas[i].className.replace(' selected', '');
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
  tarefa.addEventListener('dblclick', completeTarefa);

  listaTarefas.appendChild(tarefa);
  inputTextoTarefa.value = '';
}
btnCriarTarefa.addEventListener('click', criaTarefa);
