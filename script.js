const list = document.querySelector('#lista-tarefas');
function inputButton() {
  function onClik() {
    const listItem = document.createElement('li');
    listItem.className = 'item';
    const inputText = document.querySelector('#texto-tarefa').value;
    listItem.innerHTML = inputText;
    list.appendChild(listItem);
  }
  const buttonAdd = document.querySelector('#criar-tarefa');
  buttonAdd.addEventListener('click', onClik);
}
inputButton();

function selectItem() {
  function onClick(event) {
    const ListIntens = list.children;
    for (let i = 0; i < ListIntens.length; i += 1) {
      ListIntens[i].classList.remove('selected');
    }
    const evento = event.target;
    evento.classList.add('selected');
  }
  list.addEventListener('click', onClick);
}
selectItem();

function completItem() {
  function onClick(event) {
    const evento = event.target;
    if (evento.className === 'item completed selected' || evento.className === 'item completed') {
      evento.classList.remove('completed');
    } else {
      evento.classList.add('completed');
    }
  }
  list.addEventListener('dblclick', onClick);
}
completItem();
