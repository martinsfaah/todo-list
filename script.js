// CREATE TASKS WHEN THE BUTTON IS CLICKED

function taskCreator() {
  let newTaskButton = document.getElementById('criar-tarefa');
  newTaskButton.addEventListener('click', function(){
    let userInput = document.getElementById('texto-tarefa');
    let taskList = document.getElementById('lista-tarefas');
    let newTask = document.createElement('li');
    newTask.innerText = userInput.value;
    newTask.className = 'tarefa';
    taskList.appendChild(newTask);
    userInput.value = '';
  })
}

taskCreator();

// CHANGE ITEM BACKGROUND COLOR WHEN CLICKED

function selectTask() {
  let tasksList = document.getElementById('lista-tarefas');
  tasksList.addEventListener('click', function(event) {
    if (event.target.classList.contains('selecionada')) {
      event.target.classList.remove('selecionada');
    } else {
      let currentSelected = document.getElementsByClassName('selecionada')[0];
      if (currentSelected !== undefined) {
        currentSelected.classList.remove('selecionada');
      }
      event.target.classList.add('selecionada');
    }
  })
}

selectTask();

// MARK ITEM AS COMPLETED

function completedTaskOld() {
  let tasksList = document.getElementById('lista-tarefas');
  tasksList.addEventListener('dblclick', function(event) {
    if (event.target.className === 'tarefa') {
      event.target.className = 'tarefa completa';
    } else if (event.target.className === 'tarefa selecionada') {
      event.target.className = 'tarefa selecionada completa';
    } else if (event.target.className === 'tarefa completa') {
      event.target.className === 'tarefa';
    } else if (event.target.className === 'tarefa selecionada completa') {
      event.target.className === 'tarefa selecionada';
    }
  })
}

function completedTask() {
  let tasksList = document.getElementById('lista-tarefas');
  tasksList.addEventListener('dblclick', function(event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  })
}

completedTask();
