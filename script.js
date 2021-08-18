window.onload = function() {
const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const listOfTasks = document.querySelector('#lista-tarefas')
button.addEventListener('click', addTask)
function addTask() {
    let task = document.createElement('li');
    task.innerHTML = input.value;
    input.value = '';
    listOfTasks.appendChild(task);
}
}