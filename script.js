const inputText = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

const button = document.getElementById('criar-tarefa');

function createTask () {
    const task = document.createElement('li');
    taskList.appendChild(task);
    task.innerHTML = inputText.value;
    inputText.value = "";
}

button.addEventListener('click', createTask);