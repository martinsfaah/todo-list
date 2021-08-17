const buttonAdd = document.getElementById('criar-tarefa');
const inputItem = document.getElementById('texto-tarefa');
const listTasks = document.getElementById('lista-tarefas');

//Cria tarefas
buttonAdd.addEventListener('click', addTask);

function addTask() {
  let item = document.createElement('li');
  item.innerText = inputItem.value;
  listTasks.appendChild(item);
  inputItem.value = '';
}

//Adiciona cor no item clicado
listTasks.addEventListener('click', paintTask);

function paintTask(event) {
  for (let i = 0; i < listTasks.children.length; i += 1) {
    listTasks.children[i].style.backgroundColor = 'white';
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

//Adiciona taxado com o duplo click
listTasks.addEventListener('dblclick', riskTask);

function riskTask (event) {   
    event.target.classList.toggle('completed');
}

//Limpar tarefas
const buttonDelete = document.getElementById('apaga-tudo');
buttonDelete.addEventListener('click', clearList);

function clearList() {
  while(listTasks.firstChild) {
    listTasks.removeChild(listTasks.lastChild);
  }  
}