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
listOfTasks.addEventListener('click', greyColor);
function greyColor(event) {
    event.target.className = 'selected'
    let selectedTask = document.querySelector('.selected')
    let style = getComputedStyle(selectedTask)
    event.target.style.backgroundColor = style.backgroundColor
}
}

