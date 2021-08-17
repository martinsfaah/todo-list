//  declarations
const btnAddToList = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const inputValue = document.getElementById('texto-tarefa');
const btnClearList = document.getElementById('apaga-tudo');
const btnRemoveFinishedAssign = document.getElementById('remover-finalizados');

//  Functions
function addToList() {
  const li = document.createElement('li');

  if (!inputValue.value) { // if the value is empty send an alert and exit the function
    alert('Valor invalido!');
    return;
  }

  li.textContent = inputValue.value;
  list.appendChild(li);
  inputValue.value = '';
}

function cleanSelected() {
  const listChild = list.children;
  for (const value of listChild) {
    value.classList.remove('selected');
  }
}

function selectListElement(event) {
  cleanSelected();
  event.target.classList.toggle('selected');
  /*
  Solucao alternativa mas que nao passa na verificacao.
  Alternative solution but it doesn't go through the check.
  const select = document.querySelector('.selected')
  if (!select) { // if select return false the condition add the class, else, it removes the class.
    target.classList.add('selected');
    return;
  } else {
    select.classList.remove('selected');
    return;
  } */
}

function checkAssignment(event) {
  event.target.classList.toggle('completed');
}

function clearAllListItems() {
  list.textContent = '';
}

function removeFinished() {
  const completed = document.querySelectorAll('.completed');
  if (completed.length === 0) { return; }
  for (let i = 0; i < completed.length; i += 1) {
    completed[i].remove();
  }
}

//  events
btnAddToList.addEventListener('click', addToList);
list.addEventListener('click', selectListElement);
list.addEventListener('dblclick', checkAssignment);
btnClearList.addEventListener('click', clearAllListItems);
btnRemoveFinishedAssign.addEventListener('click', removeFinished);
