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
