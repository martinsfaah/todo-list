// 5.

const button = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function addTask(){
  let stringText = document.querySelector('#texto-tarefa').value;
  let createList = document.createElement('li');
  createList.innerHTML = stringText;
  taskList.appendChild(createList);
  document.querySelector('#texto-tarefa').value = '';
}

button.addEventListener('click', addTask);