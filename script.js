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
  const selected = document.querySelector('.selected');
  if (selected != null) {
    selected.classList.remove('selected');
  }
  const task = event.target;
  task.className = 'selected';
}

listTask.addEventListener('click', changeColorTask);
