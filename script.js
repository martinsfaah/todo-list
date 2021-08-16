let taskInput = document.getElementById('texto-tarefa');

addListeners('#criar-tarefa', 'click', createTask);

// Add Event Listeners
function addListeners(targetElement, targetEvent, targetFunction) {
  let elementArray = document.querySelectorAll(targetElement);
  for (let i = 0; i < elementArray.length; i += 1) {
    document
      .querySelectorAll(targetElement)
      [i].addEventListener(targetEvent, targetFunction);
  }
}

// Create Task
function createTask(task) {
  let newTask = document.createElement('li');
  let taskList = document.getElementById('lista-tarefas');
  newTask.className = 'listItem';
  newTask.innerText = taskInput.value;
  newTask.addEventListener('click', colorTask);
  newTask.addEventListener('dblclick', completeTask);
  taskList.appendChild(newTask);
  taskInput.value = '';
}

// Color Task
function colorTask(task) {
  let tasks = document.querySelectorAll('.listItem');
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].classList.remove('selected');
  }
  task.target.classList.add('selected');
}

// Complete Task
function completeTask(task) {
  task.target.classList.toggle('completed');
}
