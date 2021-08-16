function createTag(tagName) {
  const tag = document.createElement(`${tagName}`);
  return document.body.appendChild(tag);
}

const btnCreateItem = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
// const textInput = document.getElementById('texto-tarefa');
const listItems = document.querySelectorAll('ol li');
const btnRemoveAll = document.getElementById('apaga-tudo');
const btnRemoveSelected = document.getElementById('remover-selecionado');
const btnMoveUp = document.getElementById('mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');

function createListItems() {
  const item = list.appendChild(createTag('li'));
  const itemText = document.querySelector('#texto-tarefa').value;
  item.innerText = itemText;
  document.getElementById('texto-tarefa').value = '';
  return item;
}

// function newList() {
//   const newListSection = document.getElementById('lista');
//   newListSection.appendChild(createTag('ol')).id = 'lista-tarefas';
// }
function removeSelected() {
  const completedItens = document.getElementsByClassName('completed');
  const newList = document.querySelector('ol');
  for (let index = completedItens.length; index > completedItens.length; index -= 1) {
    newList.removeChild(completedItens[index]);
  }
}

function removeAll() {
  list.remove(listItems);
  // newList();
}

function listItemsInteract(event) {
  const selected = event;
  selected.target.classList.toggle('selected');
}
function listItemsCompleted(item) {
  const complete = item;
  complete.target.classList.toggle('completed');
}
list.addEventListener('click', listItemsInteract, false);
list.addEventListener('dblclick', listItemsCompleted, false);
btnCreateItem.addEventListener('click', createListItems);
btnRemoveAll.addEventListener('click', removeAll);
// btnRemoveSelected.addEventListener('click', removeSelected);
