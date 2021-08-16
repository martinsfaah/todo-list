const addTask = document.querySelector('#criar-tarefa');
const lista = document.getElementById('lista-tarefas');
let textTask = document.querySelector('#texto-tarefa');

addTask.addEventListener("click", novaTarefa);

function novaTarefa(){   
    const tarefa = document.createElement('li');
    tarefa.innerText = textTask.value;
    lista.appendChild(tarefa);
}