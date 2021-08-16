const addTask = document.querySelector('#criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const textTask = document.querySelector('#texto-tarefa');

// Adiciona nova tarefa
function novaTarefa() {
  const tarefa = document.createElement('li');
  tarefa.innerText = textTask.value;
  lista.appendChild(tarefa);
  textTask.value = '';
}

addTask.addEventListener('click', novaTarefa);

// Troca cor do fundo de um item
function tiraCor() {
  if (document.querySelector('li[style]') !== null) {
    document.querySelector('li[style]').removeAttribute('style');
  }
}

function trocaCor(evento) {
  tiraCor();
  const fundoTarefa = evento.target;
  fundoTarefa.style.backgroundColor = 'rgb(128,128,128)';
}

lista.addEventListener('click', trocaCor);


// Elementos Completos
function riscaCompletos(evento) {
  const elemento = evento.target;
  if (elemento.className === 'completed') {
    elemento.removeAttribute('class');
  } else {
    elemento.className = 'completed';
  }
}

lista.addEventListener('dblclick', riscaCompletos);