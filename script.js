let listaTarefas = document.getElementById('lista-tarefas');
let tarefasInput = document.getElementById('texto-tarefa');
let buttonCriaTarefa = document.getElementById('criar-tarefa');
let changeBackColor = document.getElementsByClassName('lista');
let botaoApaga = document.getElementById('apaga-tudo');
let tarefasLista = document.getElementsByClassName('lista');
let taferasCriadas = document.querySelectorAll('.lista');

// Exercicio 5,6,7,8

function changeClass(event) {
    if (event.target.className.includes('color')) {
        for (let index = 0; index < tarefasLista.length; index += 1) {
         tarefasLista[index].classList.remove('color');
         event.target.classList.add('color'); 
}
    }
}

function changeColor(event) {
    if (event.target.style.backgroundColor != 'rgb(128, 128, 128)') {
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
    else {
        event.target.style.backgroundColor = 'white';
    }
}

function criaTarefa() {
    let tarefas = document.createElement('li');
    tarefas.className = 'lista';
    tarefas.innerText = tarefasInput.value;
    listaTarefas.appendChild(tarefas);
    tarefasInput.value = ''; 
    
    tarefas.addEventListener('click', changeColor)
    tarefas.addEventListener('click', changeClass)
    
}

buttonCriaTarefa.addEventListener('click', criaTarefa);





// Exercicio 10

botaoApaga.addEventListener('click', apagar);

function apagar() {
    while (listaTarefas.hasChildNodes()) {
        listaTarefas.removeChild(listaTarefas.firstChild);
    }
}