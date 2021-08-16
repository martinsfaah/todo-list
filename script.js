// When clicking on the 'Criar Tarefa' button, a new list item is created at the end of the list and the input text is cleared.

const addTaskButton = document.getElementById('criar-tarefa');

function cleanInput() {
  document.getElementById('texto-tarefa').value = '';
}

function addTask() {
  const taskList = document.getElementById('lista-tarefas');
  const listItem = document.createElement('li');
  const inputText = document.getElementById('texto-tarefa').value;

  listItem.innerHTML = inputText;
  taskList.appendChild(listItem);

  cleanInput();
}

addTaskButton.addEventListener('click', addTask);

// Clicking on an item in the list changes its background color to grey. All other elements must have the initial background color.

const taskList = document.getElementById('lista-tarefas');
const allListItens = document.getElementsByTagName('li');

function deleteGreyClass() {
  for (let i = 0; i < allListItens.length; i += 1) {
    allListItens[i].classList.remove('greyElement');
  }
}

function greyBackground(event) {
  deleteGreyClass();
  event.target.classList.add('greyElement')
}

taskList.addEventListener('click', greyBackground);

// Double-clicking on an item causes it to be crossed out, indicating that it has been completed. It is possible to undo this action by double-clicking the item again.

function completedTask(evt) {
  const task = evt.target;
  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

taskList.addEventListener('dblclick', completedTask);

// When clicking on the 'Limpar Lista' button all itens from the list are deleted.

function cleanTasks() {
  const listSize = document.querySelectorAll('li');
  for (let i = 0; i < listSize.length; i += 1) {
    taskList.removeChild(listSize[i]);
  }
}

document.getElementById('apaga-tudo').addEventListener('click', cleanTasks);

// When clicking on the 'Limpar Completos' button all completed task itens are deleted from the list.

function cleanCompleted () {
  const listSize = document.querySelectorAll('li');
  for (let i = 0; i < listSize.length; i += 1) {
    if (listSize[i].classList.contains('completed')) {
      taskList.removeChild(listSize[i]);
    }
  }
}

document.getElementById('remover-finalizados').addEventListener('click', cleanCompleted);
