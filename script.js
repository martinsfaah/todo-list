const list = document.getElementById('lista-tarefas');
const taskAdded = document.getElementById('texto-tarefa'); 
const addTaskButton = document.getElementById('criar-tarefa');

function getInputToList() {
    const newTask = document.createElement('li');
    newTask.innerText = taskAdded.value;
    list.appendChild(newTask);
    taskAdded.value = '';
}

addTaskButton.addEventListener('click', getInputToList)