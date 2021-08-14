function createTaskHelper(str) {
  const parentElement = document.getElementById('lista-tarefas');
  const newLi = document.createElement('li');

  newLi.innerHTML = str;
  parentElement.appendChild(newLi);
}

function createTask() {
  const taskBtn = document.getElementById('criar-tarefa');
  taskBtn.addEventListener('click', () => {
    ('texto-tarefa');

    const inputElement = document.getElementById('texto-tarefa');
    createTaskHelper(inputElement.value);
    inputElement.value = '';
  });
}
function selectTaskHelper(item) {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem === null) {
    item.classList.add('selected');
  } else {
    selectedItem.classList.remove('selected');
    item.classList.add('selected');
  }
}
function selectTask() {
  const ordenedList = document.getElementById('lista-tarefas');

  ordenedList.addEventListener('click', (evento) => {
    const taskItem = evento.target;
    selectTaskHelper(taskItem);
  });
}
createTask();
selectTask();
