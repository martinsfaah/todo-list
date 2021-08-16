function createTag(tagName) {
  const tag = document.createElement(`${tagName}`);
  return document.body.appendChild(tag);
}

const btnCreateItem = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
// const textInput = document.getElementById('texto-tarefa');
const listItems = document.querySelectorAll('ol li');
const btnEraseAll = document.getElementById('apaga-tudo');

function createListItems() {
  const item = list.appendChild(createTag('li'));
  const itemText = document.querySelector('#texto-tarefa').value;
  item.innerText = itemText;
  document.getElementById('texto-tarefa').value = '';
  return item;
}

function eraseAll() {
  list.remove(listItems);
}

btnCreateItem.addEventListener('click', createListItems);
btnEraseAll.addEventListener('click', eraseAll);
