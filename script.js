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
    task.addEventListener('dblclick', taskCompleted);
  }
}

createTask();

function changeColor() {
  let item = document.querySelectorAll('.task');
  if (event.target.style.backgroundColor){
    event.target.removeAttribute('style');
  } else {
    for (let index = 0; index < item.length; index += 1) {
      if (item[index].style.backgroundColor){
        item[index].removeAttribute('style');
      }
    }
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  }
}

function taskCompleted() {
  event.target.classList.toggle('completed');
}

function clearButton() {
  let button = document.getElementById('apaga-tudo');  

  button.addEventListener('click', clearList);

  function clearList() {
    const li = document.querySelectorAll('.task');
    const ol = document.querySelector('#lista-tarefas'); 
    for (let index = 0; index < li.length; index += 1) {
      ol.removeChild(li[index]);
    }
  }
}

clearButton();