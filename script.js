let taskInput = document.getElementById('texto-tarefa');
let taskButton = document.getElementById('criar-tarefa');
taskButton.addEventListener('click', createTask);

function createTask(task) {
  let newTask = document.createElement('li');
  let taskList = document.getElementById('lista-tarefas');
  newTask.innerText = taskInput.value;
  taskList.appendChild(newTask);
  taskInput.value = '';
}
