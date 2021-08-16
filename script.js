const list = document.getElementById('lista-tarefas');
const buttonAdd = document.getElementById('criar-tarefa');
let input = document.getElementById('texto-tarefa');

function insertList() {    
  const tarefa = document.createElement('li');
  tarefa.innerText = input.value;
  list.appendChild(tarefa)
  input.value ='';
}

buttonAdd.addEventListener('click', insertList);