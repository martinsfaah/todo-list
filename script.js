const addButton = document.querySelector('#criar-tarefa');
const txtInput = document.querySelector('#texto-tarefa');
const orderedList = document.querySelector('#lista-tarefas');

addButton.addEventListener('click', addToList);

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
