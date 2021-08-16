const list = document.querySelector('#lista-tarefas');
const ListIntens = list.children;

function selectItem(event) {
  for (let i = 0; i < ListIntens.length; i += 1) {
    ListIntens[i].classList.remove('selected');
  }
  const evento = event.target;
  evento.classList.add('selected');
}

function completItem(event) {
  const evento = event.target;
  if (evento.className === 'item completed selected' || evento.className === 'item completed') {
    evento.classList.remove('completed');
  } else {
    evento.classList.add('completed');
  }
}

function inputButton() {
  function onClik() {
    const listItem = document.createElement('li');
    listItem.className = 'item';
    const inputText = document.querySelector('#texto-tarefa');
    listItem.innerHTML = inputText.value;
    listItem.addEventListener('click', selectItem);
    listItem.addEventListener('dblclick', completItem);
    list.appendChild(listItem);
    inputText.value = '';
  }
  const buttonAdd = document.querySelector('#criar-tarefa');
  buttonAdd.addEventListener('click', onClik);
}
inputButton();

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

// functio