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

// CHANGE ITEN BACKGROUND COLOR WHEN CLICKED

function selectTask() {
  let tasksList = document.getElementById('lista-tarefas');
  tasksList.addEventListener('click', function(event) {
    // let tasks = document.getElementsByClassName('tarefas')
    if (event.target.className === 'tarefa') {
      let currentSelected = document.getElementsByClassName('tarefa selecionada')[0];
      if (currentSelected !== undefined) {
        currentSelected.className = 'tarefa';
      }
      event.target.className = 'tarefa selecionada';
    } else if (event.target.className === 'tarefa selecionada') {
      event.target.className = 'tarefa';
    }
  })
}

selectTask();
