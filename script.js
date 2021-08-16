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

function colorListItem(event) {
  const itensLista = document.getElementsByClassName('itens-lista-individuais');
  const alvo2 = event.target;
  for (let i = 0; i < itensLista.length; i += 1) {
    itensLista[i].style.backgroundColor = 'transparent';
    alvo2.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function addTask() {
  const inputField = document.querySelector('#texto-tarefa');
  const orderList = document.querySelector('#lista-tarefas');
  const listItem = document.createElement('li');
  orderList.appendChild(listItem);
  listItem.className = 'itens-lista-individuais';
  listItem.innerText = inputField.value;
  inputField.value = '';
  listItem.addEventListener('click', colorListItem);
}

const buttonAdd = document.querySelector('#criar-tarefa');
buttonAdd.addEventListener('click', addTask);
