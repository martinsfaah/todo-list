window.onload = function() {
const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const listOfTasks = document.querySelector('#lista-tarefas')
button.addEventListener('click', addTask)
function addTask() {
    let task = document.createElement('li');
    task.className = 'notSelected'
    task.innerHTML = input.value;
    input.value = '';
    listOfTasks.appendChild(task);
}
listOfTasks.addEventListener('click', greyColor);
function greyColor(event) {
    let notSelected = document.querySelector('.notSelected')
    let white = getComputedStyle(notSelected)
    let allTask = document.getElementsByTagName('li')
    for (i = 0; i < allTask.length; i +=1) {
        allTask[i].className = 'notSelected'
    }
    event.target.className = 'selected'
    let selected = document.querySelector('.selected')
    let style = getComputedStyle(selected)
    for (let l = 0; l < allTask; l += 1) {
        if (allTask[l].className == 'notSelected') {
            allTask[l].style.backgroundColor = 'white'
        } else {
            allTask[l].style.backgroundColor = style.backgroundColor
        }
    }
    
}
}
