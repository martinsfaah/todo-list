const btnAddTask = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
let tasks = taskList.children;

function selectTask(event) {
  let selectedTask = document.getElementById('selected-task');
  if (selectedTask !== null) {
    selectedTask.id = '';
  };
  selectedTask = event.target;
  selectedTask.id = 'selected-task';
}

function addTask() {
  const task = document.createElement('li');
  task.innerHTML = inputTask.value;
  task.addEventListener('click', selectTask);
  taskList.appendChild(task);
  inputTask.value = '';
}

btnAddTask.addEventListener('click', addTask);

