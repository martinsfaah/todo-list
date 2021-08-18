const buttonClick = document.getElementById('criar-tarefa');
const toDoList = document.getElementById('lista-tarefas');

/* Função para criar os elementos */
function createListItems() {
  const createItem = document.createElement('li');
  const inputText = document.getElementById('texto-tarefa').value;
  createItem.className = 'items';
  toDoList.appendChild(createItem);
  createItem.innerText = inputText;
}

function clear() {
  document.getElementById('texto-tarefa').value = '';
}

function changeColor(event) {
  reset();
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

buttonClick.addEventListener('click', createListItems);
buttonClick.addEventListener('click', clear);
toDoList.addEventListener('click', changeColor);

function reset() {
  const elementList = document.querySelectorAll('li');
  for(let index = 0; index < elementList.length; index += 1) {
    document.querySelectorAll('li')[index].style.backgroundColor = '';
  }
}