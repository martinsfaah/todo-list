const inputText = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
let taskItens = document.getElementsByClassName('tarefa');

//Function to create new task according to inputed text, clearing what the user typed and adding event listener to change background color when clicked
function createTask() {
    const task = document.createElement('li');
    taskList.appendChild(task);
    task.innerHTML = inputText.value;
    inputText.value = '';
    task.addEventListener('click', colorClick);
    task.style.backgroundColor = 'white'
    task.className = 'tarefa'
}

//Adding event listener to the button
button.addEventListener('click', createTask);

//Setting rgb(128, 128, 128) to the background color of the current clicked item and reset the others to white 
function colorClick(listItem) {
    for(let index = 0; index < taskItens.length; index = index + 1) {
        taskItens[index].style.backgroundColor = 'white'
    }
    listItem.target.style.backgroundColor = 'rgb(128, 128, 128)'
}

