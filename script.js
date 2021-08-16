// Adiciona uma tarefa
function addNewTask() {
  const taskList = document.getElementById('lista-tarefas')
  const newTaskItem = document.createElement('li');
  const taskText = document.getElementById('texto-tarefa');
  newTaskItem.innerText = taskText.value;
  taskList.appendChild(newTaskItem);
  taskText.value = '';
}

const addTaskButton = document.getElementById('criar-tarefa');
addTaskButton.addEventListener('click', addNewTask);
