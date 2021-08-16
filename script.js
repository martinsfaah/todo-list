const createTodoList = document.getElementById('criar-tarefa');
const todo = document.getElementById('texto-tarefa');
createTodoList.addEventListener('click', function() {
  let li = document.createElement('li');
  li.textContent = todo.value;
  document.getElementById('lista-tarefas').appendChild(li);
})