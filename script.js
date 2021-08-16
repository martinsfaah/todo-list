const inputText = document.getElementById('texto-tarefa');
const typeButton = document.getElementById('criar-tarefa');
const listTasks = document.getElementById('lista-tarefas');

function addTask() {
    const taskNew = document.createElement('li')
    taskNew.innerHTML = inputText.value;
    listTasks.appendChild(taskNew);
    inputText.value = '';

}

typeButton.addEventListener('click', addTask) 



// console.log("kk")
