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
  const task = event.target;
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

const btnClearList = document.getElementById('apaga-tudo');

function clearList() {
  taskList.innerHTML = '';
}

// Outra forma de apagar a lista:
// function clearList() {
//   for (let i = 1; i <= taskList.childElementCount; i += 0) {
//     taskList.removeChild(taskList.lastElementChild);
//   }
// }

btnClearList.addEventListener('click', clearList);

const btnClearCompletedTasks = document.getElementById('remover-finalizados');

function clearCompletedTasks() {
  let completedTasks = document.querySelectorAll('.completed');
  for (let i = completedTasks.length - 1; i >= 0; i -= 1) {
    taskList.removeChild(completedTasks[i]);
  }
}

btnClearCompletedTasks.addEventListener('click', clearCompletedTasks);
