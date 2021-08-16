const list = document.getElementById('lista-tarefas');
const buttonAdd = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const buttonClearAll = document.getElementById('apaga-tudo');

function insertList() {
  const tarefa = document.createElement('li');
  tarefa.className = 'lineList';
  tarefa.innerText = input.value;
  list.appendChild(tarefa);
  tarefa.addEventListener('click', selectList);
  tarefa.addEventListener('dblclick', lineThrough);
  input.value = '';
}

buttonAdd.addEventListener('click', insertList);

function selectList(event) {
  const lineListClass = document.querySelectorAll('.lineList');
  for (let index = 0; index < lineListClass.length; index += 1) {
    lineListClass[index].style.background = '';
  }
  event.target.style.background = 'rgb(128, 128, 128)';
}

function lineThrough(event) {
  const classe2 = document.querySelector('.completed');

  event.target.classList.add('completed');
  classe2.addEventListener('dblclick', removeCompleted);
}

function removeCompleted(event) {
  event.target.classList.remove('completed');
}

function clearList() {
  const list = document.querySelectorAll('.lineList');
  for (let index of list) {
    index.parentNode.removeChild(index);
  }
}
buttonClearAll.addEventListener('click', clearList);
