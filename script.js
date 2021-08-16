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
