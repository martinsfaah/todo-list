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
    console.log(inputElement.value);
    createTaskHelper(inputElement.value);
    inputElement.value = '';
  });
}

createTask();
