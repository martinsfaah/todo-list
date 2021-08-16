const btAdd = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
let corDestaque = 'rgb(128, 128, 128)';

console.log(corDestaque);

function addTarefa(){
  const input = document.querySelector('#texto-tarefa');
  let tarefaAdicionada = document.createElement('li');
  tarefaAdicionada.innerHTML = input.value;
  input.value = '';
  listaTarefas.appendChild(tarefaAdicionada);
}

btAdd.addEventListener('click', addTarefa);

function selecTarefa(evento){
  const tarefas = document.querySelectorAll('li');
  const aux = evento;
  for (let i = 0; i < tarefas.length; i += 1){
    let aux = tarefas[i];
     aux.style.backgroundColor = 'white';
  }
  aux.target.style.backgroundColor = corDestaque;
}

listaTarefas.addEventListener('click', selecTarefa);

function riscarTarefa(evento){
  const aux = evento;
  if (aux.target.className === 'completed'){
    aux.target.className = 'notCompleted';
  } else {
    aux.target.className = 'completed';
  }
}

listaTarefas.addEventListener('dblclick', riscarTarefa);
