const addButton = document.querySelector('#criar-tarefa');
const txtInput = document.querySelector('#texto-tarefa');
const orderedList = document.querySelector('#lista-tarefas');

function addToList() {
  const listItem = document.createElement('li');
  listItem.innerHTML = txtInput.value;
  orderedList.appendChild(listItem);
  txtInput.value = '';

}

addButton.addEventListener('click', addToList);