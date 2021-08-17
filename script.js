function clearInput() {
  const clear = document.getElementById('texto-tarefa');
  clear.value = '';
}

function receiveTask() {
  const task = document.getElementById('lista-tarefas');
  const val = document.getElementById('texto-tarefa').value;
  const listLine = document.createElement('li');
  listLine.innerText = val;
  task.appendChild(listLine);
  clearInput();
}

function listTasks() {
  const buttonNewTask = document.getElementById('criar-tarefa');
  buttonNewTask.addEventListener('click', receiveTask);
}
listTasks();

const task = document.getElementById('lista-tarefas');
function clearColor() {
  const tasks = task.children;
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].style.backgroundColor = 'white';
  }
}

task.addEventListener('click', (task2) => {
  clearColor();
  const selectedTask = task2;
  selectedTask.target.style.backgroundColor = 'rgb(128,128,128)';
});

function findSelectedClass(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 'completed') {
      return true;
    }
  }
  return false;
}

task.addEventListener('dblclick', (task2) => {
  const doubleClicked = task2.target.classList;
  if (findSelectedClass(doubleClicked)) {
    doubleClicked.remove('completed');
  } else {
    doubleClicked.add('completed');
  }
});

function clearTasks() {
  const tasks = task.children;
  for (let i = tasks.length - 1; i >= 0; i -= 1) {
    tasks[i].remove();
  }
}

function toButtonClearTasks() {
  const buttonClearTasks = document.getElementById('apaga-tudo');
  buttonClearTasks.addEventListener('click', clearTasks);
}

toButtonClearTasks();

function clearDone() {
  const doneTask = document.getElementsByClassName('completed');
  for (let i = doneTask.length - 1; i >= 0; i -= 1) {
    doneTask[i].remove();
  }
}

function toButtonClearTasksDone() {
  const buttonClearTasks = document.getElementById('remover-finalizados');
  buttonClearTasks.addEventListener('click', clearDone);
}

toButtonClearTasksDone();
