const btAdd = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const corDestaque = 'rgb(128, 128, 128)';
const btClear = document.querySelector('#apaga-tudo');
const btRemoverFinalizados = document.querySelector('#remover-finalizados');

function addTarefa() {
  const input = document.querySelector('#texto-tarefa');
  const tarefaAdicionada = document.createElement('li');
  tarefaAdicionada.innerHTML = input.value;
  input.value = '';
  listaTarefas.appendChild(tarefaAdicionada);
}

btAdd.addEventListener('click', addTarefa);

function selecTarefa(evento) {
  const tarefas = document.querySelectorAll('li');
  const auxEvento = evento;
  for (let i = 0; i < tarefas.length; i += 1) {
    const aux = tarefas[i];
    aux.style.backgroundColor = 'white';
  }
  auxEvento.target.style.backgroundColor = corDestaque;
}

listaTarefas.addEventListener('click', selecTarefa);

function riscarTarefa(evento) {
  const aux = evento;
  if (aux.target.className === 'completed') {
    aux.target.className = 'notCompleted';
  } else {
    aux.target.className = 'completed';
  }
}

listaTarefas.addEventListener('dblclick', riscarTarefa);

function clear() {
  const tarefas = document.querySelectorAll('li');
  for (let i = 0; i < tarefas.length; i += 1) {
    const aux = tarefas[i];
    aux.remove();
  }
}

btClear.addEventListener('click', clear);

function clearCompleted() {
  const tarefasFeitas = document.querySelectorAll('.completed');
  for (let i = 0; i < tarefasFeitas.length; i += 1) {
    const aux = tarefasFeitas[i];
    aux.remove();
  }
}

btRemoverFinalizados.addEventListener('click', clearCompleted);