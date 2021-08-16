const createTodoList = document.getElementById('criar-tarefa');

let todoList = document.getElementById('lista-tarefas');
let todoItems = document.getElementsByClassName('todo-item')
let todo = document.getElementById('texto-tarefa');

createTodoList.addEventListener('click', function() {
  let li = document.createElement('li');
  li.className = 'todo-item';
  li.textContent = todo.value;
  li.addEventListener('click', function() {
    li.style.backgroundColor = 'rgb(128, 128, 128)';
  })
  document.getElementById('lista-tarefas').appendChild(li);
  todo.value = '';
})

// for (let i = 0; i < todoItems.length; i += 1) {
//   if (todoItems[i].style.backgroundColor === 'rgb(128, 128, 128)') {
//     todoItems[i].style.backgroundColor = null;
//   }
//   todoItems[i].style.backgroundColor = 'rgb(128, 128, 128)';
// }