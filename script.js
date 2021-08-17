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
    if (event.target.classList.contains('tarefa')) {
      if (event.target.classList.contains('selecionada')) {
        // event.target.classList.remove('selecionada');
      } else {
        let currentSelected = document.getElementsByClassName('selecionada')[0];
        if (currentSelected !== undefined) {
          currentSelected.classList.remove('selecionada');
        }
        event.target.classList.add('selecionada');
      }
    }
  })
}

selectTask();

// MARK ITEM AS COMPLETED

function completedTask() {
  let tasksList = document.getElementById('lista-tarefas');
  tasksList.addEventListener('dblclick', function(event) {
    if (event.target.classList.contains('tarefa')) {
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    }
  })
}

completedTask();

// CLEAR ALL BUTTON

function clearList() {
  let clearAllButton = document.getElementById('apaga-tudo');
  clearAllButton.addEventListener('click', function() {
    let tasksList = document.getElementById('lista-tarefas');
    while (tasksList.firstChild) {
      tasksList.removeChild(tasksList.firstChild);
    }
  })
}

clearList();

// CLEAR COMPLETED BUTTON

function clearCompleted() {
  let clearCompletedButton = document.getElementById('remover-finalizados');
  clearCompletedButton.addEventListener('click', function() {
    let completedTasks = document.getElementsByClassName('completed');
    for (let index = completedTasks.length - 1; index >= 0; index -= 1 ) {
      completedTasks[index].parentNode.removeChild(completedTasks[index]);
    }
  })
}

clearCompleted();

// SAVE LIST BUTTON

function saveList() {
  let saveButton = document.getElementById('salvar-tarefas');
  saveButton.addEventListener('click', function() {
    let tasksList = document.getElementById('lista-tarefas');
    localStorage.setItem('tasks', tasksList.innerHTML);
  })
}

saveList();

// RECOVER SAVED LIST

function recoverList() {
  let tasksList = document.getElementById('lista-tarefas');
  tasksList.innerHTML = localStorage.getItem('tasks');
}

recoverList();

// MOVE ITENS
// this block was inspired on Marcelo Adriano work, where I learned about .inserbefore() method

function moveItemUp() {
  let moveUpButton = document.getElementById('mover-cima');
  moveUpButton.addEventListener('click', function() {
    let itemSelected = document.getElementsByClassName('selecionada')[0];
    let tasksList = document.getElementById('lista-tarefas');
    let tasksListChildrens = tasksList.children;
    for (index = 0; index < tasksListChildrens.length; index += 1) {
      if (index !== 0 && tasksListChildrens[index] === itemSelected) {
        tasksList.insertBefore(itemSelected, tasksListChildrens[index - 1]);
        break;
      }
    }
  })
}

moveItemUp();

function moveItemDown() {
  let moveDownButton = document.getElementById('mover-baixo');
  moveDownButton.addEventListener('click', function() {
    let itemSelected = document.getElementsByClassName('selecionada')[0];
    let tasksList = document.getElementById('lista-tarefas');
    let tasksListChildrens = tasksList.children;
    for (index = 0; index < tasksListChildrens.length; index += 1) {
      if (index !== (tasksListChildrens.length -1) && tasksListChildrens[index] === itemSelected) {
        tasksList.insertBefore(itemSelected, tasksListChildrens[index + 2]);
        break;
      }
    }
  })
}

moveItemDown();

// CLEAR SELECTEDS

function clearSelected() {
  let clearSelectedButton = document.getElementById('remover-selecionado');
  clearSelectedButton.addEventListener('click', function() {
    let selectedTasks = document.getElementsByClassName('selecionada');
    for (let index = selectedTasks.length - 1; index >= 0; index -= 1 ) {
      selectedTasks[index].parentNode.removeChild(selectedTasks[index]);
    }
  })
}

clearSelected();
