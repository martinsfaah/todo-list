let listaTarefas = document.getElementById('lista-tarefas');
let tarefasInput = document.getElementById('texto-tarefa');
let buttonCriaTarefa = document.getElementById('criar-tarefa');
let changeBackColor = document.getElementsByClassName('lista');
let botaoApaga = document.getElementById('apaga-tudo');
let tarefasLista = document.getElementsByClassName('lista');

// Exercicio 5,6,7,8

function changeBack(event) {
    if (event.target.className != 'colorBack') { 
        for (let index = 0; index < tarefasLista.length; index += 1) {
        tarefasLista[index].classList.remove('colorBack');
    }
    event.target.classList.add('colorBack'); 
        } 
    }
    
    function criaTarefa() {
        let tarefas = document.createElement('li');
        tarefas.className = 'lista';
        tarefas.innerText = tarefasInput.value;
        listaTarefas.appendChild(tarefas);
        tarefasInput.value = ''; 

        
        tarefas.addEventListener('click', changeBack)
    }
    
    buttonCriaTarefa.addEventListener('click', criaTarefa);

// Exercicio 10

botaoApaga.addEventListener('click', apagar);

function apagar() {
    while (listaTarefas.hasChildNodes()) {
        listaTarefas.removeChild(listaTarefas.firstChild);
    }
}
