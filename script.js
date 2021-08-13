const createButton = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const tasksList = document.getElementById('lista-tarefas');

function addTask() {
  const newLi = document.createElement('li');
  newLi.innerText = input.value;
  tasksList.appendChild(newLi);
  input.value = '';
}

createButton.addEventListener('click', addTask);
