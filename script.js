const addButton = document.querySelector('#criar-tarefa');
const txtInput = document.querySelector('#texto-tarefa');
const orderedList = document.querySelector('#lista-tarefas');

function addToList() {
  const listItem = document.createElement('li');
  listItem.innerHTML = txtInput.value;
  listItem.classList.add('list-item');
  orderedList.appendChild(listItem);
  txtInput.value = '';
  listItem.addEventListener('click', changeColor);    
}

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

