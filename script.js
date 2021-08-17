const addButton = document.querySelector('#criar-tarefa');
const clearAllButton = document.querySelector('#apaga-tudo');
const clearCompletedButton = document.querySelector('#remover-finalizados');
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
  const allItens = document.querySelectorAll('.list-item');

  for (let index = allItens.length; index > 0; index -= 1) {
    orderedList.removeChild(orderedList.childNodes[index]);
  }
}

function clearCompleted() {
  const completedTask = document.getElementsByClassName('completed');

  while (completedTask.length > 0) {
    completedTask[0].parentNode.removeChild(completedTask[0]);
  }
}

addButton.addEventListener('click', addToList);
clearAllButton.addEventListener('click', clearAll);
clearCompletedButton.addEventListener('click', clearCompleted);
