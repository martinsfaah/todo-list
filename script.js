const addButton = document.querySelector('#criar-tarefa');
const clearAllButton = document.querySelector('#apaga-tudo');
const txtInput = document.querySelector('#texto-tarefa');
const orderedList = document.querySelector('#lista-tarefas');

function changeColor(event) {
  const selected = document.querySelector('.selected');

  if (selected === null) {
    event.target.classList.add('selected');
  } if (selected !== null) {
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function completeTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function addToList() {
  const listItem = document.createElement('li');
  listItem.innerHTML = txtInput.value;
  listItem.classList.add('list-item');
  orderedList.appendChild(listItem);
  txtInput.value = '';
  listItem.addEventListener('click', changeColor);
  listItem.addEventListener('dblclick', completeTask);
}

function clearAll() {
  const list = document.querySelector('#lista-tarefas');
  const allItens = document.querySelectorAll('.list-item');

  for (let index = allItens.length; index > 0; index -= 1) {
    list.removeChild(list.childNodes[index]);
  }
}

addButton.addEventListener('click', addToList);
clearAllButton.addEventListener('click', clearAll);
