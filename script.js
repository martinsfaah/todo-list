const list = document.querySelector('#lista-tarefas');
function inputButton () {
  const listItem = document.createElement('li');
  listItem.className = 'item';
  function onClik () {
    const inputText = document.querySelector('#texto-tarefa').value;
    listItem.innerHTML = inputText;
    list.appendChild(listItem);
  }
  const buttonAdd = document.querySelector('#criar-tarefa');
  buttonAdd.addEventListener('click', onClik);
}
inputButton();

function