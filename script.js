function createTag(tagName) {
  const tag = document.createElement(`${tagName}`);
  return document.body.appendChild(tag);
}

const btnCreateItem = document.querySelector('#criar-tarefa');
const listItems = document.querySelector('#lista-tarefas');
// const textInput = document.getElementById('texto-tarefa');

function createListItems() {
  const item = listItems.appendChild(createTag('li'));
  const itemText = document.querySelector('#texto-tarefa').value;
  item.innerText = itemText;
  document.getElementById('texto-tarefa').value = '';
  return item;
}

btnCreateItem.addEventListener('click', createListItems);
