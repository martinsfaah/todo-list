const addBtn = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');

function addTask() {
  const task = document.createElement('li');
  list.appendChild(task);
  task.innerHTML = input.value;
  input.value = "";
}

addBtn.addEventListener('click', addTask);
