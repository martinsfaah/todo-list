const taskButton = document.getElementById('criar-tarefa');

function addEventToList(element, event, func) {
  if (element.length > 0) {
    for (let index = 0; index < element.length; index += 1) {
      element[index].addEventListener(event, func);
    }
  } else {
    element.addEventListener(event, func);
  }
}

function addToList() {
  const getInput = document.querySelector('#texto-tarefa');
  const newItemList = document.createElement('li');
  newItemList.innerHTML = getInput.value;
  document.querySelector('#lista-tarefas').appendChild(newItemList);
  document.getElementById('texto-tarefa').value = '';
}

addEventToList(taskButton, 'click', addToList);
