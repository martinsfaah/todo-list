function createElements(){
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const p = document.createElement('p');
    const input = document.createElement('input');
    const ol = document.createElement('ol');
    const button = document.createElement('button');
    header.innerText = 'Minha Lista de Tarefas';
    p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
    p.id = 'funcionamento';
    input.id = 'texto-tarefa';
    ol.id = 'lista-tarefas';
    button.id = 'criar-tarefa';
    button.innerText = 'Adicionar Tarefa';
    button.addEventListener('click', createTask);

    body.appendChild(header);
    body.appendChild(p);
    body.appendChild(input);
    body.appendChild(ol);
    body.appendChild(button);
}

createElements();

function changeColor() {
    const selectedTask = event.currentTarget;
    const selecteds = document.getElementsByClassName('task');
    if (selectedTask.style.backgroundColor === '' | selectedTask.style.backgroundColor === 'white') {
        for (let i = 0; i < selecteds.length; i += 1) {
            selecteds[i].style.backgroundColor = 'white';
        }
        selectedTask.style.backgroundColor = 'rgb(128, 128, 128)';
    }
}

function createTask(){
    const writtenTask = document.querySelector('#texto-tarefa').value;
    const list = document.querySelector('#lista-tarefas');
    const newTask = document.createElement('li');
    newTask.innerText = writtenTask;
    newTask.className = 'task';
    newTask.addEventListener('click', changeColor);
    list.appendChild(newTask);
    document.querySelector('#texto-tarefa').value = '';
}
