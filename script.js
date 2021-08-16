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
deleteAllTasks.addEventListener('click',() => {
  let childrenOfTheList = taskList.children;
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  } 
})
