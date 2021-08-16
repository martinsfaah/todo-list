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


