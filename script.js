function selectTask(event) {
  const eventObj = event;
  const todoList = document.getElementsByTagName('li');
  for (let index = 0; index < todoList.length; index += 1) {
    if (todoList[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      todoList[index].style.backgroundColor = '';
    }
  }
  eventObj.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function riskTask(event) {
  const eventObj = event;
  console.log(eventObj.target);
  if (eventObj.target.className !== 'completed') {
    eventObj.target.className = 'completed';
  } else {
    eventObj.target.className = '';
  }
}

function addTasks() {
  const button = document.getElementById('criar-tarefa');
  const inputText = document.getElementById('texto-tarefa');
  const todoList = document.getElementById('lista-tarefas');
  button.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.addEventListener('click', selectTask);
    newItem.addEventListener('dblclick', riskTask);
    newItem.innerHTML = inputText.value;
    inputText.value = '';
    todoList.appendChild(newItem);
  });
}


addTasks();
