const taskButton = document.getElementById('criar-tarefa');
const cleanButton = document.querySelector('#apaga-tudo');

function makeSelected(event) {
  const addSelectedClass = event.target;
  const selectedItemList = document.querySelector('.selected');
  addSelectedClass.classList.add('selected');
  addSelectedClass.style.backgroundColor = 'rgb(128,128,128)';

  if (selectedItemList) {
    selectedItemList.classList.remove('selected');
    selectedItemList.style.backgroundColor = '';
  }
}

function addToList() {
  const getInput = document.querySelector('#texto-tarefa');
  const newItemList = document.createElement('li');
  newItemList.innerHTML = getInput.value;
  newItemList.classList.add('list-item');
  document.querySelector('#lista-tarefas').appendChild(newItemList);
  newItemList.addEventListener('click', makeSelected);
  document.getElementById('texto-tarefa').value = '';
}

taskButton.addEventListener('click', addToList);
// makeSelected('dblclick');

// function deleteButton() {
//   const getList = document.querySelector('#lista-tarefas').children;
//   if (getList.length > 0) {
//     getList.removeChild(getList.length);
//   }
// }
// cleanButton.addEventListener('click', deleteButton);
