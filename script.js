function selectTask(event) {
  const eventObj = event;
  const todoList = document.getElementsByClassName('tarefa');
  for (let index = 0; index < todoList.length; index += 1) {
    console.log(todoList[index].style.backgroundColor);
    if (todoList[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      todoList[index].style.backgroundColor = '';
    }
  }
  eventObj.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function addTasks() {
  const button = document.getElementById('criar-tarefa');
  const inputText = document.getElementById('texto-tarefa');
  const todoList = document.getElementById('lista-tarefas');
  button.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.className = 'tarefa';
    newItem.addEventListener('click', selectTask);
    newItem.innerHTML = inputText.value;
    inputText.value = '';
    todoList.appendChild(newItem);
  });
}

addTasks();
