let inputTask = document.getElementById("texto-tarefa");
let buttonCreateTask = document.getElementById("criar-tarefa");
let taskList = document.getElementById("lista-tarefas");

buttonCreateTask.addEventListener('click', createTask);
taskList.addEventListener('click', changeColor);

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


