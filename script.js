const buttonCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

function inserirTarefa() {
  const inputTarefa = document.getElementById('texto-tarefa');
  const itemLista = document.createElement('li');

  itemLista.innerText = inputTarefa.value;
  inputTarefa.value = '';

  listaTarefas.appendChild(itemLista);
}

buttonCriarTarefa.addEventListener('click', inserirTarefa);
