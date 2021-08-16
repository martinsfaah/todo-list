const list = document.querySelector('#lista-tarefas');
const ListIntens = list.children;
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

function deleteAll() {
  function onClick() {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
  const apagaTudo = document.querySelector('#apaga-tudo');
  apagaTudo.addEventListener('click', onClick);
}
deleteAll();

function deleteFinished() {
  function onClick() {
    for (let i = 0; i < ListIntens.length; i += 1) {
      while (ListIntens[i].classList.contains('completed')) {
        list.removeChild(ListIntens[i]);
      }
    }
  }
  const rmvFinished = document.querySelector('#remover-finalizados');
  rmvFinished.addEventListener('click', onClick);
}
deleteFinished();
