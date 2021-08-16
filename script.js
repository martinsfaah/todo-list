const body = document.querySelector('#body');

const buttonSection = document.createElement('section');
body.appendChild(buttonSection);
const button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerText = 'adicionar tarefa';
buttonSection.appendChild(button);

const input = document.createElement('input');
input.id = 'texto-tarefa';
body.appendChild(input);

const orderList = document.createElement('ol');
orderList.id = 'lista-tarefas';
body.appendChild(orderList);

function addTask() {
  button.onclick = function () {
    const createList = document.createElement('li');
    createList.className = 'list-items';
    orderList.appendChild(createList);
    createList.innerText = input.value;
    input.value = '';
    selectListItem();
  }
};
addTask();

function selectListItem () {
  orderList.addEventListener('click', function (event) {
    const selectedItem = document.getElementsByClassName('list-items');
    for (i = 0; i < selectedItem.length; i += 1) {
      selectedItem[i].style.backgroundColor = 'transparent';
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    } 
  })
};
