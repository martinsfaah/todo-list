const mainSection = document.getElementById('main-section');

function addInput() {
  const inputField = document.createElement('input');
  mainSection.appendChild(inputField);
  inputField.id = 'texto-tarefa';
}
addInput();

function createButtonAdd() {
  const buttonAdd = document.createElement('button');
  mainSection.appendChild(buttonAdd);
  buttonAdd.id = 'criar-tarefa';
  buttonAdd.innerText = 'Adicionar';
}
createButtonAdd();

function createOrderList() {
  const orderList = document.createElement('ol');
  mainSection.appendChild(orderList);
  orderList.id = 'lista-tarefas';
}
createOrderList();

function addTask() {
  const inputField = document.querySelector('#texto-tarefa');
  const orderList = document.querySelector('#lista-tarefas');
  const listItem = document.createElement('li');
  orderList.appendChild(listItem);
  listItem.innerText = inputField.value;
  inputField.value = '';
}

const buttonAdd = document.querySelector('#criar-tarefa');
buttonAdd.addEventListener('click', addTask);
