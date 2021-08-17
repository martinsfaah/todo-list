let listaTarefas = document.getElementById('lista-tarefas');
let tarefasInput = document.getElementById('texto-tarefa');
let buttonCriaTarefa = document.getElementById('criar-tarefa');
let changeBackColor = document.getElementsByClassName('lista');
let botaoApaga = document.getElementById('apaga-tudo');
let tarefasLista = document.getElementsByClassName('lista');
let taferasCriadas = document.querySelectorAll('.lista');

// Exercicio 5


function changeColor(event) {
    if (event.target.style.backgroundColor != 'rgb(128, 128, 128)') {
        console.log('rgb(128, 128, 128)');
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
    else {
        event.target.style.backgroundColor = 'white';
        console.log('ola');
    }
}

function criaTarefa() {
    let tarefas = document.createElement('li');
    tarefas.className = 'lista';
    tarefas.innerText = tarefasInput.value;
    listaTarefas.appendChild(tarefas);
    tarefasInput.value = ''; 
    
    tarefas.addEventListener('click', changeColor)
    
}

buttonCriaTarefa.addEventListener('click', criaTarefa);



// Exercicio 10

// botaoApaga.addEventListener('click', apagar);

// function apagar() {
//         taferasCriadas.reset(); 
//     }
