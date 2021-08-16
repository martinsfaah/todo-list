const taskList = document.getElementById('lista-tarefas');
const inputTask = document.getElementById('texto-tarefa');
inputTask.value = '';
let selectedTask = document.getElementById('selected-task')
const btnAddTask = document.getElementById('criar-tarefa');

function selectTask(event) {
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

btnClearList.addEventListener('click', clearList);

const btnClearCompletedTasks = document.getElementById('remover-finalizados');

function clearCompletedTasks() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let i = completedTasks.length - 1; i >= 0; i -= 1) {
    taskList.removeChild(completedTasks[i]);
  }
}

btnClearCompletedTasks.addEventListener('click', clearCompletedTasks);

const btnSaveList = document.getElementById('salvar-tarefas');

function saveList() {
  localStorage.setItem('tasklist', JSON.stringify(taskList.innerHTML));
}

btnSaveList.addEventListener('click', saveList);

window.onload = function init() {
  const savedList = JSON.parse(localStorage.getItem('tasklist'));
  taskList.innerHTML = savedList;
  const selectedTask = document.getElementById('selected-task');
  if (selectedTask !== null) {
    selectedTask.id = '';
  }
  if (taskList.innerHTML !== '') {
    for (let i = 0; i < taskList.childNodes.length; i += 1) {
      taskList.childNodes[i].addEventListener('click', selectTask);
      taskList.childNodes[i].addEventListener('dblclick', completeTask);
    }
  }
};
