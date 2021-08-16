const list = document.getElementById('lista-tarefas');
const inputTask = document.getElementById('texto-tarefa');
const createTaskButton = document.getElementById('criar-tarefa');
const deleteButton = document.getElementById('apaga-tudo');

// Creates task
function createTask() {
  const newTask = document.createElement('li');
  newTask.innerText = inputTask.value;
  list.appendChild(newTask);
  inputTask.value = '';
}

createTaskButton.addEventListener('click', createTask);

// Changes task background-color
function removeBackgroundColor() {
  if (document.querySelector('li[style]') !== null) {
    document.querySelector('li[style]').removeAttribute('style');
  }
}

function taskBackgroundColor(event) {
  removeBackgroundColor();
  const clickedTask = event.target;
  clickedTask.style.backgroundColor = 'rgb(128, 128, 128)';
  clickedTask.style.color = 'rgb(44, 182, 125)';
}

list.addEventListener('click', taskBackgroundColor);

// Line-through elements (completed)
function lineThrough(event) {
  const lineElement = event.target;
  if (lineElement.className === 'completed') {
    lineElement.removeAttribute('class');
  } else {
    lineElement.className = 'completed';
  }
}

list.addEventListener('dblclick', lineThrough);

// Deletes all tasks
function deleteItems() {
  const listItems = document.getElementsByTagName('li');
  if (listItems.length !== 0) {
    for (let i = listItems.length - 1; i >= 0; i -= 1) {
      const item = listItems[i];
      item.remove();
    }
  }
}

deleteButton.addEventListener('click', deleteItems);
