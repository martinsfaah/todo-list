const taskList = document.getElementById('lista-tarefas');

// Adiciona uma tarefa
function addNewTask() {
  const newTaskItem = document.createElement('li');
  const taskText = document.getElementById('texto-tarefa');
  newTaskItem.innerText = taskText.value;
  taskList.appendChild(newTaskItem);
  taskText.value = '';
}

const addTaskButton = document.getElementById('criar-tarefa');
addTaskButton.addEventListener('click', addNewTask);

// Altera background-color do item selecionado
function changeBgColor(task) {
  const clickedTask = task.target;
  clickedTask.style.backgroundColor = 'rgb(128,128,128)';
}

taskList.addEventListener('click', changeBgColor);
