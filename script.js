const taskInput = document.getElementById('texto-tarefa');
const taskButtonAdd = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const eraseAllButton = document.getElementById('apaga-tudo');
const removeDoneButton = document.getElementById('remover-finalizados');

// Add task to list
taskButtonAdd.addEventListener('click', () => {
  const taskItem = document.createElement('li');
  taskItem.innerText = taskInput.value;
  taskInput.value = '';
  taskList.appendChild(taskItem);
});

function clearSelected() {
  const tasks = taskList.children;
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].style.backgroundColor = 'white';
  }
}

// Color clicked tasks
taskList.addEventListener('click', (task) => {
  clearSelected();
  const selectedTask = task;
  selectedTask.target.style.backgroundColor = 'rgb(128, 128, 128)';
});

function checkForSelected(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 'completed') {
      return true;
    }
  }
  return false;
}

// Cross tasks
taskList.addEventListener('dblclick', (task) => {
  const classes = task.target.classList;
  if (checkForSelected(classes)) {
    classes.remove('completed');
  } else {
    classes.add('completed');
  }
});

// Erase all
eraseAllButton.addEventListener('click', () => {
  taskList.innerHTML = '';
});

eraseAllButton.addEventListener('click', () => {
  taskList.innerHTML = '';
});

removeDoneButton.addEventListener('click', () => {
  const tasks = taskList.children;
  for (let i = tasks.length - 1; i >= 0; i -= 1) {
    if (tasks[i].className === 'completed') {
      tasks[i].remove();
    }
  }
});
