const list = document.getElementById('lista-tarefas');

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

function completeItem(event) {
  const listItem = event.target;
  listItem.classList.toggle('completed');
}

function addListItemListener() {
  const listItens = document.getElementsByClassName('list-item');
  for (let i = 0; i < listItens.length; i += 1) {
    const item = listItens[i];
    item.addEventListener('click', selectItem);
    item.addEventListener('dblclick', completeItem);
  }
}

function createListItem(value) {
  const listItem = document.createElement('li');
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

function cleanList() {
  const listItens = document.getElementsByClassName('list-item');
  for (let i = listItens.length - 1; i >= 0; i -= 1) {
    const item = listItens[i];
    list.removeChild(item);
  }
}

function cleanCompletedItens() {
  const listItens = document.getElementsByClassName('list-item');
  for (let i = listItens.length - 1; i >= 0; i -= 1) {
    const item = listItens[i];
    if (item.classList.contains('completed')) {
      list.removeChild(item);
    }
  }
}

function saveTasks() {
  const listContent = list.innerHTML;
  localStorage.setItem('listContent', listContent);
}

function pageInit() {
  list.innerHTML = localStorage.getItem('listContent');
  const addButton = document.getElementById('criar-tarefa');
  addButton.addEventListener('click', addTask);

  const cleanButton = document.getElementById('apaga-tudo');
  cleanButton.addEventListener('click', cleanList);

  const completedCleanButton = document.getElementById('remover-finalizados');
  completedCleanButton.addEventListener('click', cleanCompletedItens);

  const saveListButton = document.getElementById('salvar-tarefas');
  saveListButton.addEventListener('click', saveTasks);

  addListItemListener();
}

pageInit();
