const buttonCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

function selecionarTarefa(evt) {
  const itemTarefa = evt.target;

  listaTarefas.childNodes.forEach((tarefa) => {
    const tf = tarefa;
    tf.style.backgroundColor = '';
  });
  itemTarefa.style.backgroundColor = 'rgb(128, 128, 128)';
}

function completarTarefa(evt) {
  const itemTarefa = evt.target;

  if (itemTarefa.classList.contains('completed')) {
    itemTarefa.classList.remove('completed');
  } else {
    itemTarefa.classList.add('completed');
  }
}

function inserirTarefa() {
  const inputTarefa = document.getElementById('texto-tarefa');
  const itemTarefa = document.createElement('li');

  itemTarefa.innerText = inputTarefa.value;
  itemTarefa.addEventListener('click', selecionarTarefa);
  itemTarefa.addEventListener('dblclick', completarTarefa);
  inputTarefa.value = '';

  listaTarefas.appendChild(itemTarefa);
}

buttonCriarTarefa.addEventListener('click', inserirTarefa);
