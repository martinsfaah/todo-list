function selectItem(event) {
  const listItens = document.getElementsByClassName('list-item');

  for (let i = 0; i < listItens.length; i += 1) {
    const item = listItens[i];
    if (item.classList.contains('selected')) {
      item.classList.remove('selected');
    }
  }

  const listItem = event.target;
  listItem.classList.add('selected');
}

function addListItemListener() {
  const listItens = document.getElementsByClassName('list-item');
  for (let i = 0; i < listItens.length; i += 1) {
    const item = listItens[i];
    item.addEventListener('click', selectItem);
  }
}

function createListItem(value) {
  const listItem = document.createElement('li');
  const list = document.getElementById('lista-tarefas');
  listItem.classList.add('list-item');
  listItem.innerHTML = value;
  list.appendChild(listItem);
  addListItemListener();
}

function addTask() {
  const input = document.getElementById('texto-tarefa');
  const inputText = input.value;
  createListItem(inputText);
  input.value = '';
}

const addButton = document.getElementById('criar-tarefa');
addButton.addEventListener('click', addTask);
