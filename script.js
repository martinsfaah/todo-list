const buttonCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

function mudarCorTarefa(evt) {
  const itemTarefa = evt.target;

  listaTarefas.childNodes.forEach((tarefa) => {
    const tf = tarefa;
    tf.style.backgroundColor = '';
  });
  itemTarefa.style.backgroundColor = 'rgb(128, 128, 128)';
}

function inserirTarefa() {
  const inputTarefa = document.getElementById('texto-tarefa');
  const itemTarefa = document.createElement('li');

  itemTarefa.innerText = inputTarefa.value;
  itemTarefa.addEventListener('click', mudarCorTarefa);
  inputTarefa.value = '';

  listaTarefas.appendChild(itemTarefa);
}

buttonCriarTarefa.addEventListener('click', inserirTarefa);
