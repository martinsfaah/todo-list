const taskInput = document.getElementById('texto-tarefa');
const taskButtonAdd = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

taskButtonAdd.addEventListener('click', () => {
  const taskItem = document.createElement('li');
  taskItem.innerText = taskInput.value;
  taskInput.value = '';
  taskList.appendChild(taskItem);
});
