const addBtn = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const tasks = document.getElementsByTagName('li');

function colorTask(e) {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].classList.remove('selected');
  }
  const actualTask = e.target;
  actualTask.classList.add('selected');
}

function addTask() {
  const taskLi = document.createElement('li');
  list.appendChild(taskLi);
  taskLi.addEventListener('click', colorTask);
  taskLi.innerHTML = input.value;
  input.value = '';
}

addBtn.addEventListener('click', addTask);
