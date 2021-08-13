const createButton = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const tasksList = document.getElementById('lista-tarefas');
const backColor = 'rgb(128, 128, 128)';

function addTask() {
  const newLi = document.createElement('li');
  newLi.innerText = input.value;
  tasksList.appendChild(newLi);
  input.value = '';
}

createButton.addEventListener('click', addTask);

function clearBackground() {
  const li = document.querySelectorAll('li');
  for (let elem = 0; elem < li.length; elem += 1) {
    li[elem].style.backgroundColor = '';
  }
}

function changeBackgroundColor(event) {
  clearBackground();
  const li = event;
  li.target.style.backgroundColor = backColor;
}

tasksList.addEventListener('click', changeBackgroundColor);

function strikeThrough(event) {
  const li = event;
  if (li.target.className !== 'completed') {
    li.target.className = 'completed';
  } else {
    li.target.className = '';
  }
}

tasksList.addEventListener('dblclick', strikeThrough);

const deleteButton = document.getElementById('apaga-tudo');

function clearAll() {
  tasksList.innerHTML = '';
}

deleteButton.addEventListener('click', clearAll);

const finishedButton = document.getElementById('remover-finalizados');

function removeCompleted() {
  const completed = document.getElementsByClassName('completed');
  const completedLength = completed.length;
  for (let i = completedLength - 1; i >= 0; i -= 1) {
    completed[i].remove();
  }
}

finishedButton.addEventListener('click', removeCompleted);
