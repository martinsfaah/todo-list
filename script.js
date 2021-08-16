const createButton = document.querySelector('#criar-tarefa');
const input = document.querySelector('input');
const taskList = document.querySelector('ol');

function addItem() {
  let itemTask = document.createElement('li');
  let task = input.value;
  itemTask.innerHTML = task;
  taskList.appendChild(itemTask);
  input.value = '';
  itemTask.addEventListener('click', () => {
    let arrayOfItems = document.querySelectorAll("li");
    for(let index = 0;index < arrayOfItems.length; index += 1) {
      if(arrayOfItems[index].style.backgroundColor === 'rgb(128, 128, 128)') {
        arrayOfItems[index].style.backgroundColor = 'white';
      }
    }
    itemTask.style.backgroundColor = 'rgb(128, 128, 128)'
  });
  itemTask.addEventListener('dblclick',() => {
    if(itemTask.className === 'completed') {
      itemTask.className -= 'completed';
    }
    else {
      itemTask.className = 'completed';
    }
  })
}
createButton.addEventListener('click',addItem);
const deleteAllTasks = document.querySelector('#apaga-tudo');
deleteAllTasks.addEventListener('');
