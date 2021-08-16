function createTask() {
  const button = document.querySelector('#criar-tarefa');
  const input = document.querySelector('#texto-tarefa');
  let ol = document.querySelector('#lista-tarefas');

  button.addEventListener('click', addTask);

  function addTask() {    
    let task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = input.value;
    ol.appendChild(task);
    input.value = '';
    task.addEventListener('click', changeColor);
  }
}

createTask();

function changeColor() {
  if (event.target.style.backgroundColor){
    event.target.removeAttribute('style');
  } else {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  }
}