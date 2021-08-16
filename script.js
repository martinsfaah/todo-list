function addTask() {
    let taskList = document.getElementById("lista-tarefas");
    let newTaskValue = document.getElementById("texto-tarefa").value;
    let newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(newTaskValue));
    taskList.appendChild(newLi).id = "tarefa" + getListSize();
    resetInputValue()
    addEventClickToTask()
}

function resetInputValue() {
    document.getElementById("texto-tarefa").value = '';
}

function getListSize() {
    return document.querySelectorAll("li").length
}

function addEventClickToTask() {
    for (let i = 0; i < getListSize(); i += 1) {
        document.querySelectorAll('li')[i].addEventListener('click', selectTask);
        document.querySelectorAll('li')[i].addEventListener('dblclick', changeTaskCondition);
    }
}

function clearSelectedTasks() {
    for (let i = 0; i < getListSize(); i += 1) {
        document.querySelectorAll('li')[i].style.background = "white";
    }
}

function selectTask(task) {
    clearSelectedTasks()
    task.target.style.background = 'rgb(128, 128, 128)';
}

function changeTaskCondition(task) {
    if (task.target.className != 'completed') {
    task.target.className = 'completed';
    task.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    }
    else {
        task.target.style.textDecoration = '';
        task.target.className = '';
    }
}

function clearList() {
    let listSize = getListSize()
    for (let i = 0; i < listSize; i += 1) {
        document.querySelectorAll('li')[0].parentNode.removeChild(document.querySelectorAll('li')[0])
    }
}

function removeCompleted() {
    let completedTasks = document.querySelectorAll('.completed')
    let completedCount = completedTasks.length
    for (let i = 0; i < completedCount; i += 1) {
        document.querySelectorAll('.completed')[0].parentNode.removeChild(document.querySelectorAll('.completed')[0])
    }
}

function saveTasks() {
    for (let i = 0; i < getListSize(); i += 1) {
        localStorage.setItem("tarefa"+(i+1),(document.querySelector("#tarefa" + (i + 1)).innerHTML))
        localStorage.setItem("tarefastatus"+(i+1),(document.querySelector("#tarefa" + (i + 1)).className))
    }
}

window.onload = function() {
    for (let i = 0; i < (localStorage.length/2); i += 1) {
        let taskList = document.getElementById("lista-tarefas");
        let newTaskValue = localStorage.getItem('tarefa' + (i+1));
        let newLi = document.createElement('li');
        newLi.appendChild(document.createTextNode(newTaskValue));
        taskList.appendChild(newLi).id = "tarefa" + getListSize();
    }
    for (let i = 0; i < (getListSize()); i += 1) {
        if (localStorage.getItem("tarefastatus" + (i+1)) === 'completed')  {
            document.querySelector("#tarefa" + (i + 1)).className = 'completed'
            document.querySelector("#tarefa" + (i + 1)).style.textDecoration = 'line-through solid rgb(0, 0, 0)';
        }
    }
}