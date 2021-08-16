const list = document.getElementById('lista-tarefas');
const buttonAdd = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');

function selectList () {
  const lineList = document.querySelector('li');
  lineList.style.background = 'rgb(128, 128, 128)';

}
list.addEventListener('click', selectList);

function insertList() {    
  const tarefa = document.createElement('li');
  tarefa.innerText = input.value;
  list.appendChild(tarefa);
  input.value = '';
}

buttonAdd.addEventListener('click', insertList);
