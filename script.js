let buttonClick = document.getElementById('criar-tarefa');
let toDoList = document.getElementById('lista-tarefas');

function listItems() {
  let createItem = document.createElement('li');
  let inputText = document.getElementById('texto-tarefa').value;
  createItem.className = 'items';
  toDoList.appendChild(createItem);
  createItem.innerText = inputText;
}

function clear() {
  document.getElementById('texto-tarefa').value = '';
}

buttonClick.addEventListener('click', listItems);
buttonClick.addEventListener('click', clear);