const list = document.getElementById('lista-tarefas');
const buttonAdd = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const buttonClearAll = document.getElementById('apaga-tudo');
const buttonClearComplete = document.getElementById('remover-finalizados');
const buttonRemoveSelect = document.getElementById('remover-selecionado');

function insertList() {
  const tarefa = document.createElement('li');
  tarefa.classList.add('lineList');
  tarefa.innerText = input.value;
  list.appendChild(tarefa);
  tarefa.addEventListener('click', selectList);
  tarefa.addEventListener('dblclick', lineThrough);
  input.value = '';
}

buttonAdd.addEventListener('click', insertList);

function selectList(event) {
  const lineListClass = document.querySelector('.selected');
  if (document.getElementsByClassName('selected').length === 0) {
    event.target.classList.add('selected');
  } else {
    event.target.classList.add('selected');
    lineListClass.classList.remove('selected');
  }
}

function lineThrough(event) {

    event.target.classList.remove('completed');
    event.target.classList.add('completed');
  }


function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}
buttonClearAll.addEventListener('click', clearList);

function clearCompleted() {
  const classCompleted = document.querySelectorAll('.completed');
  if (classCompleted.length > 0) {
    for (let index = classCompleted.length - 1; index >= 0; index -= 1) {
      list.removeChild(classCompleted[index]);
    }
  }
}
buttonClearComplete.addEventListener('click', clearCompleted);

function removeSelected() {
  const listCompleted = document.querySelectorAll('.selected');
  if (document.getElementsByClassName('selected').length === 1) {
    listCompleted[0].remove();
  }
}
buttonRemoveSelect.addEventListener('click', removeSelected);
