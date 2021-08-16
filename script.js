const createButton = document.querySelector('#criar-tarefa');
const input = document.querySelector('input');
const taskList = document.querySelector('ol');

function addItem() {
  const itemTask = document.createElement('li');
  const task = input.value;
  itemTask.innerHTML = task;
  taskList.appendChild(itemTask);
  input.value = '';
  itemTask.addEventListener('click', () => {
    const arrayOfItems = document.querySelectorAll('li');
    for (let index = 0; index < arrayOfItems.length; index += 1) {
      if (arrayOfItems[index].style.backgroundColor === 'rgb(128, 128, 128)') {
        arrayOfItems[index].style.backgroundColor = 'white';
      }
    }
    itemTask.style.backgroundColor = 'rgb(128, 128, 128)';
  });
  itemTask.addEventListener('dblclick', () => {
    if (itemTask.className === 'completed') {
      itemTask.className -= 'completed';
    } else {
      itemTask.className = 'completed';
    }
  });
}
createButton.addEventListener('click', addItem);
const deleteAllTasks = document.querySelector('#apaga-tudo');
deleteAllTasks.addEventListener('click', () => {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
});

const removeSelectedButton = document.querySelector('#remover-finalizados');
removeSelectedButton.addEventListener('click', () => {
  for (let index = 0; index < taskList.children.length; index += 1) {
    if (taskList.children[index].className === 'completed') {
      taskList.removeChild(taskList.children[index]);
      index = 0;
    }
  }
});

const removeCurrentTask = document.querySelector("#remover-selecionado");
removeCurrentTask.addEventListener('click', () => {
for (let index = 0; index < taskList.children.length; index += 1) {
  if(taskList.children[index].style.backgroundColor === 'rgb(128, 128, 128)') {
    taskList.removeChild(taskList.children[index]);
  }
}
});
 
