const criarTarefa = document.getElementById('criar-tarefa');
const ListaTarefa = document.getElementById('lista-tarefas');

function addNewToDo() {
  const newListItemInput = document.getElementById('texto-tarefa');
  const newItem = document.createElement('li');
  newItem.textContent = newListItemInput.value;
  newListItemInput.value = '';
  ListaTarefa.appendChild(newItem);
}

function backgroundChange(event) {
  const olElement = event.target;
  const oldSelected = document.querySelector('.selected');
  if (olElement.classList.contains('selected')) {
    return;
  }
  if (olElement.tagName === 'LI') {
    olElement.style.backgroundColor = 'rgb(128,128,128)';
    if (oldSelected) {
      oldSelected.classList.remove('selected');
      oldSelected.style.backgroundColor = '';
    }
    olElement.classList.add('selected');
  }
}

criarTarefa.addEventListener('click', addNewToDo);

ListaTarefa.addEventListener('click', backgroundChange);
