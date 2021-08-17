const taskList = document.querySelector('#lista-tarefas');
const addTaskBtn = document.querySelector('#criar-tarefa');
const clearListBtn = document.querySelector('#apaga-tudo');
const clearCompletedBtn = document.querySelector('#remover-finalizados');
const saveTasksBtn = document.querySelector('#salvar-tarefas');
let fullTaskLi = document.querySelectorAll('ol#lista-tarefas li');

// Create a function to reset the task selection
function clearTasksSelection() {
  for (let li = 0; li < fullTaskLi.length; li += 1) {
    fullTaskLi[li].classList.remove('selected');
  }
}

function makeTasksClicable(whichTask) {
  whichTask.addEventListener('click', (task) => {
    const thisTaskClasses = task.target.classList;
    if (!thisTaskClasses.contains('selected')) {
      clearTasksSelection();
      thisTaskClasses.add('selected');
    }
  });
}

function toggleTaskCompletion(whichTask) {
  whichTask.addEventListener('dblclick', (task) => {
    task.target.classList.toggle('completed');
  });
}

addTaskBtn.addEventListener('click', () => {
  const taskToAddText = document.querySelector('#texto-tarefa');
  if (taskToAddText.value !== '') {
    const taskLi = document.createElement('li');
    taskLi.innerHTML = taskToAddText.value;
    taskLi.className = 'task';
    taskList.appendChild(taskLi);
    taskToAddText.value = '';
    makeTasksClicable(taskLi);
    toggleTaskCompletion(taskLi);
    fullTaskLi = document.querySelectorAll('ol#lista-tarefas li');
  } else {
    alert('Tarefa invállida');
  }
});

clearListBtn.addEventListener('click', () => {
  taskList.innerHTML = '';
});

clearCompletedBtn.addEventListener('click', () => {
  for (const comp of fullTaskLi) {
    if (comp.classList.contains('completed')) {
      comp.parentNode.removeChild(comp);
    }
  }
});

saveTasksBtn.addEventListener('click', () => {
  if (taskList.childElementCount > 0) {
    localStorage.clear();
    localStorage.setItem('savedTaskList', JSON.stringify(taskList.innerHTML));
    console.log('List saved to local storage');
  } else {
    localStorage.clear();
    console.log('Local storage cleared');
  }
});

window.onload = function restoreSavedList() {
  if (localStorage.length > 0) {
    taskList.innerHTML = JSON.parse(localStorage.getItem('savedTaskList'));
    fullTaskLi = document.querySelectorAll('ol#lista-tarefas li');
    fullTaskLi.forEach((element) => {
      makeTasksClicable(element);
      toggleTaskCompletion(element);
    });
  }
};
