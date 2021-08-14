const ORDENEDLIST = document.getElementById('lista-tarefas');

function createTask() {
  const taskBtn = document.getElementById('criar-tarefa');
  taskBtn.addEventListener('click', () => {
    ('texto-tarefa');

    const inputElement = document.getElementById('texto-tarefa');
    const newLi = document.createElement('li');

    newLi.innerHTML = inputElement.value;
    ORDENEDLIST.appendChild(newLi);
    inputElement.value = '';
  });
}

function selectTask() {
  ORDENEDLIST.addEventListener('click', (evento) => {
    const taskItem = evento.target;
    const selectedItem = document.querySelector('.selected');
    if (selectedItem === null) {
      taskItem.classList.add('selected');
    } else if (taskItem.classList.contains('selected')) {
      taskItem.classList.remove('selected');
    } else {
      selectedItem.classList.remove('selected');
      taskItem.classList.add('selected');
    }
  });
}

function completeTask() {
  ORDENEDLIST.addEventListener('dblclick', (evento) => {
    const item = evento.target;
    if (item.classList.contains('completed')) {
      item.classList.remove('completed');
    } else {
      item.classList.add('completed');
    }
  });
}
createTask();
selectTask();
completeTask();
