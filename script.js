const body = document.querySelector('#body');

const buttonSection = document.createElement('section');
body.appendChild(buttonSection);
const button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerText = 'Adicionar Tarefa';
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
    //completedItems();
  };
}
addTask();

function selectListItem() {
  orderList.addEventListener('click', function (event) {
    const selectedItem = document.getElementsByClassName('list-items');
    for (let i = 0; i < selectedItem.length; i += 1) {
      selectedItem[i].style.backgroundColor = 'transparent';
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
}

// function completedItems() {
//   orderList.addEventListener('dblclick', function (event) {
//     const dbClickedItem = event.target
//     dbClickedItem.classList.remove('completed');
//     dbClickedItem.classList.add('completed');
//   })
// }
const items = document.getElementsByClassName('list-items');
function clearButton() {
  const clearButton = document.createElement('button');
  clearButton.id = 'apaga-tudo';
  clearButton.innerText = 'Apagar Tudo';
  buttonSection.appendChild(clearButton);
  clearButton.addEventListener('click', function (event) {
    for (let i = items.length - 1; i >= 0; i -= 1) {
      orderList.removeChild(items[i]);
    }
  });
}
clearButton();