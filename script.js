function loadList() {
  const ol = document.querySelector('ol');
  const itensSaved = localStorage.getItem('lista');
  ol.innerHTML = itensSaved;
}

function changeColor(event) {
  const selectedTask = event.currentTarget;
  const selecteds = document.getElementsByClassName('task');
  if (selectedTask.style.backgroundColor === '' || selectedTask.style.backgroundColor === 'white') {
    for (let i = 0; i < selecteds.length; i += 1) {
      selecteds[i].style.backgroundColor = 'white';
    }
    selectedTask.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function markDone(event) {
  const doneTask = event.currentTarget;
  if (doneTask.className === 'task') {
    doneTask.classList.add('completed');
  } else {
    doneTask.classList.remove('completed');
  }
}

function createTask() {
  const writtenTask = document.querySelector('#texto-tarefa').value;
  const list = document.querySelector('#lista-tarefas');
  const newTask = document.createElement('li');
  newTask.innerText = writtenTask;
  newTask.className = 'task';
  newTask.addEventListener('click', changeColor);
  newTask.addEventListener('dblclick', markDone);
  list.appendChild(newTask);
  document.querySelector('#texto-tarefa').value = '';
}

function createElements() {
  const body = document.querySelector('body');
  const header = document.createElement('header');
  const p = document.createElement('p');
  const input = document.createElement('input');
  const button = document.createElement('button');
  header.innerText = 'Minha Lista de Tarefas';
  p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  p.id = 'funcionamento';
  input.id = 'texto-tarefa';
  button.id = 'criar-tarefa';
  button.innerText = 'Adicionar Tarefa';
  button.addEventListener('click', createTask);
  body.appendChild(header);
  body.appendChild(p);
  body.appendChild(input);
  body.appendChild(button);
}

function clearTasks() {
  const tasks = document.querySelectorAll('li');
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].parentNode.removeChild(tasks[i]);
  }
}

function clearFinishedTasks() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let i = 0; i < completedTasks.length; i += 1) {
    completedTasks[i].parentNode.removeChild(completedTasks[i]);
  }
}

function createOlAndButton() {
  const body = document.querySelector('body');
  const ol = document.createElement('ol');
  const button = document.createElement('button');
  const button2 = document.createElement('button');
  button.id = 'apaga-tudo';
  button.innerText = 'Apagar Tarefas';
  button2.id = 'remover-finalizados';
  button2.innerText = 'Apagar Somente as Tarefas Finalizadas';
  ol.id = 'lista-tarefas';
  button.addEventListener('click', clearTasks);
  button2.addEventListener('click', clearFinishedTasks);
  body.appendChild(ol);
  body.appendChild(button);
  body.appendChild(button2);
}

function saveTasks() {
  const list = document.querySelector('#lista-tarefas').innerHTML;
  localStorage.setItem('lista', list)
}

function createButtons() {
  const body = document.querySelector('body');
  const buttonSave = document.createElement('button');
  buttonSave.id = 'salvar-tarefas';
  buttonSave.innerText = 'Salvar';
  buttonSave.addEventListener('click', saveTasks);
  body.appendChild(buttonSave);
}

createElements();
createOlAndButton();
createButtons();
loadList();