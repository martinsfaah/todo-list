function selecionaTarefa(evento) {
  const ultimaTarefa = document.querySelector('.selected');
  if (ultimaTarefa !== null) ultimaTarefa.classList.remove('selected');
  evento.target.classList.add('selected');
}

function completaTarefa(evento) {
  const tarefaCompleta = evento.target;
  if (tarefaCompleta.className.includes('completed')) {
    tarefaCompleta.classList.remove('completed');
  } else {
    tarefaCompleta.classList.add('completed');
  }
}

function criaTarefa() {
  if (document.querySelector('#texto-tarefa').value) {
    const tarefa = document.querySelector('#texto-tarefa');
    const novoElementoLista = document.createElement('li');
    novoElementoLista.innerText = tarefa.value;
    novoElementoLista.addEventListener('click', selecionaTarefa);
    novoElementoLista.addEventListener('dblclick', completaTarefa);
    document.querySelector('#lista-tarefas').appendChild(novoElementoLista);
    tarefa.value = '';
  }
}

document.querySelector('#criar-tarefa').onclick = criaTarefa;
