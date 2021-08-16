const list = document.getElementById('lista-tarefas');
const buttonAdd = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
let line = document.querySelector('li');

function insertList() {
  const tarefa = document.createElement('li');
  tarefa.className = 'lineList';
  tarefa.innerText = input.value;
  list.appendChild(tarefa);
  tarefa.addEventListener('click', selectList);
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

