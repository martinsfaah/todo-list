function createTask() {
  const button = document.querySelector('#criar-tarefa');
  const input = document.querySelector('#texto-tarefa');
  let li = document.createElement('li');
  let ol = document.querySelector('#lista-tarefas');

  button.addEventListener('click', addTask);

  function addTask() {
    for (let index = 0; index < 1; index += 1) {
      let task = document.createElement('li');
      task.innerHTML = input.value;
      ol.appendChild(task);
    }
    input.value = '';
  }
}

createTask();