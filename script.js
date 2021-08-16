const button = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

// 5. e 6.

function addTask() {
  const stringText = document.querySelector('#texto-tarefa').value;
  const createList = document.createElement('li');
  createList.innerHTML = stringText;
  taskList.appendChild(createList);
  document.querySelector('#texto-tarefa').value = '';
}

button.addEventListener('click', addTask);

// 7. e 8.

