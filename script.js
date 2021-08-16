const createTodoList = document.getElementById('criar-tarefa');

let todoList = document.getElementById('lista-tarefas');
let todoItems = document.getElementsByClassName('todo-item')
let todo = document.getElementById('texto-tarefa');

createTodoList.addEventListener('click', function() {
  let li = document.createElement('li');
  li.className = 'todo-item';
  li.textContent = todo.value;
  li.addEventListener('click', selectionHandler);
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
// function selectItem() {
//   for (let i = 0; i < event.length; i += 1) {
//     event[i].classList.remove('selected');
//   }
//   for (let i = 0; i < event.length; i += 1) {
//     event[i].classList.add('selected');
//     selectedColor = event[i].style.backgroundColor;
//     console.log(`${selectedColor} selecionado`)
//   }
// }

// function highlight() {
//   let selected = document.querySelector('selected');
//   for (let i = 0; i < todoItems.length; i += 1) {
//     if (todoItems[i] === selected) {
//       todoItems[i].style.backgroundColor = 'rgb(128, 128, 128)';
//     } else {
//       todoItems[i].style.backgroundColor = undefined;
//     }
//   }
// }