const createTodoList = document.getElementById('criar-tarefa');

let todoList = document.getElementById('lista-tarefas');
let todoItems = document.getElementsByClassName('todo-item')
let todo = document.getElementById('texto-tarefa');

createTodoList.addEventListener('click', function() {
  let li = document.createElement('li');
  li.className = 'todo-item';
  li.textContent = todo.value;
  li.addEventListener('click', selectionHandler);
  li.addEventListener('dblclick', completeTasks);
  document.getElementById('lista-tarefas').appendChild(li);
  todo.value = '';
})

function selectionHandler() {
  for (i = 0; i < todoItems.length; i += 1) {
    if (todoItems[i].classList.contains('selected')) {
      todoItems[i].classList.remove('selected');
      todoItems[i].style.backgroundColor = null;
    }
  }
  this.classList.add('selected');
  this.style.backgroundColor = 'rgb(128, 128, 128)';
}

function completeTasks() {
  if (this.classList.contains('completed')) {
    this.classList.remove('completed');
    this.style.textDecoration = null;
  } else {
    this.classList.add('completed');
    this.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  }
}