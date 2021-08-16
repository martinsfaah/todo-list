const btnAddTask = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function selectTask(event) {
  let selectedTask = document.getElementById('selected-task');
  if (selectedTask !== null) {
    selectedTask.id = '';
  }
  selectedTask = event.target;
  selectedTask.id = 'selected-task';
}

function completeTask(event) {
  let task = event.target;
  if (task.className === '') {
  task.className = 'completed';
  } else {
    task.className = '';
  }
}

function addTask() {
  const task = document.createElement('li');
  task.innerHTML = inputTask.value;
  task.addEventListener('click', selectTask);
  task.addEventListener('dblclick', completeTask);
  taskList.appendChild(task);
  inputTask.value = '';
}

btnAddTask.addEventListener('click', addTask);
