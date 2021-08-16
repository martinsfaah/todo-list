const textInput = document.querySelector('#texto-tarefa');
const buttonCreateTask = document.querySelector('#criar-tarefa');
const listTask = document.querySelector('#lista-tarefas');

function createTask() {
  const newTask = document.createElement('li');
  newTask.innerHTML = textInput.value;
  listTask.appendChild(newTask);
  textInput.value = '';
}

buttonCreateTask.addEventListener('click', createTask);
