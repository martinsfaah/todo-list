let inputTask = document.getElementById("texto-tarefa");
let buttonCreateTask = document.getElementById("criar-tarefa");
let taskList = document.getElementById("lista-tarefas");
let buttonEraseList = document.getElementById("apaga-tudo");
let items = document.getElementsByTagName('li');

buttonCreateTask.addEventListener('click', createTask);
taskList.addEventListener('click', changeColor);
taskList.addEventListener('dblclick', completeTask);
buttonEraseList.addEventListener('click', eraseList);

function createTask (){
    let taskValue = inputTask.value;
    let newTask = document.createElement("li");
    newTask.innerHTML = taskValue;
    taskList.appendChild(newTask);
    inputTask.value = "";
}

function changeColor(event) {
  let selected = document.querySelector('.selected');
  if (selected != null) {
    selected.classList.remove('selected');
  }
  let task = event.target;
  task.className = 'selected';
}

function completeTask(event) {
    let completed = document.querySelector('.completed');
    if (completed != null) {
      completed.classList.remove('completed');
    }
    let task = event.target;
    task.className = 'completed';
  }
  
function eraseList(){
    taskList.innerHTML = '';
}