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
