const body = document.querySelector('#body');

const buttonSection = document.createElement('section');
body.appendChild(buttonSection)
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
  button.onclick = function() {
    const inputValue = input.value;
    const createList = document.createElement('li');
    createList.innerText = inputValue;
    orderList.appendChild(createList);
  }
}
addTask();