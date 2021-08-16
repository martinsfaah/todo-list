const textInput = document.querySelector('#texto-tarefa');
const buttonCreateTask = document.querySelector('#criar-tarefa');
const listTask = document.querySelector('#lista-tarefas');
const clearAll = document.querySelector('#apaga-tudo');
const clearFinish = document.querySelector('#remover-finalizados');

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

function riskTaskCompleted(event) {
  const task = event.target;
  const taskClasses = task.classList;
  console.log(task.classList[1]);

  if (taskClasses[1] === 'completed') {
    taskClasses.remove('completed');
  } else {
    taskClasses.add('completed');
  }
}

listTask.addEventListener('dblclick', riskTaskCompleted);

function clearAllTask() {
  const tasks = document.querySelectorAll('.task');

  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].parentElement.removeChild(tasks[i]);
  }
}

clearAll.addEventListener('click', clearAllTask);

function clearFinishTask() {
  const taskFinish = document.querySelectorAll('.completed');
  console.log(taskFinish);
  console.log('aaaaaaaaaaa');

  for (let i = 0; i < taskFinish.length; i += 1) {
    taskFinish[i].parentElement.removeChild(taskFinish[i]);
  }
}

clearFinish.addEventListener('click', clearFinishTask);
