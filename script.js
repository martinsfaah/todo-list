const textInput = document.querySelector('#texto-tarefa');
const buttonCreateTask = document.querySelector('#criar-tarefa');
const listTask = document.querySelector('#lista-tarefas');

function createTask() {
  const newTask = document.createElement('li');
  newTask.innerHTML = textInput.value;
  newTask.className = 'task';
  listTask.appendChild(newTask);
  textInput.value = '';
}

buttonCreateTask.addEventListener('click', createTask);

function changeColorTask(event) {
  const task = event.target;
  task.style.backgroundColor = 'rgb(128, 128, 128)';
}

listTask.addEventListener('click', changeColorTask);
