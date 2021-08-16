const buttonAdd = document.getElementById('criar-tarefa');
const inputItem = document.getElementById('texto-tarefa');
const listTasks = document.getElementById('lista-tarefas');

buttonAdd.addEventListener('click', addTask);

function addTask() {
  let item = document.createElement('li');
  item.innerText = inputItem.value;
  listTasks.appendChild(item);
  inputItem.value = '';
}