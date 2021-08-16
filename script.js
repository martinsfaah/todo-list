const taskList = document.querySelector('#lista-tarefas');
const addTaskBtn = document.querySelector('#criar-tarefa');

addTaskBtn.addEventListener('click', () => {
  const taskToAddText = document.querySelector('#texto-tarefa');
  const taskLi = document.createElement('li');
  taskLi.innerHTML = taskToAddText.value;
  taskList.appendChild(taskLi);
  taskToAddText.value = '';
});
