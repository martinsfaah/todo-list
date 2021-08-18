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

buttonClick.addEventListener('click', createListItems);
buttonClick.addEventListener('click', clear);

let selectedItem = 'false';
function changeColor(event) {
  if (selectedItem === 'false') {
    event.target.style.backgroundColor = 'rgb(128, 128,128)';
    selectedItem = 'True';
  }
}
toDoList.addEventListener('click', changeColor);
