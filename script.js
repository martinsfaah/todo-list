function createListItem(value) {
  const listItem = document.createElement('li');
  const list = document.getElementById('lista-tarefas');
  listItem.innerHTML = value;
  list.appendChild(listItem);
}

function addTask() {
  const input = document.getElementById('texto-tarefa');
  const inputText = input.value;
  createListItem(inputText);
  input.value = '';
}

const addButton = document.getElementById('criar-tarefa');
addButton.addEventListener('click', addTask);
