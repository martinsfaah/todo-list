const list = document.getElementById('lista-tarefas');
const inputTask = document.getElementById('texto-tarefa');
const createTaskButton = document.getElementById('criar-tarefa');

// Creates task
function createTask() {
  const newTask = document.createElement('li');
  newTask.innerText = inputTask.value;
  list.appendChild(newTask);
  inputTask.value = '';
}

createTaskButton.addEventListener('click', createTask);

// Changes task background-color
function removeBackgroundColor() {
  if (document.querySelector('li[style]') !== null) {
    document.querySelector('li[style]').removeAttribute('style');
  }
}

function taskBackgroundColor(event) {
  removeBackgroundColor();
  const clickedTask = event.target;
  clickedTask.style.backgroundColor = 'rgb(128, 128, 128)';
  clickedTask.style.color = 'rgb(44, 182, 125)';
}

list.addEventListener('click', taskBackgroundColor);
