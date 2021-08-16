function criaTarefa() {
  if (document.querySelector('#texto-tarefa').value) {
    let tarefa = document.querySelector('#texto-tarefa');
    const novoElementoLista = document.createElement('li');
    novoElementoLista.innerText = tarefa.value;
    novoElementoLista.addEventListener('click',selecionaTarefa);
    document.querySelector('#lista-tarefas').appendChild(novoElementoLista);
    tarefa.value = '';
  }
}

function selecionaTarefa(evento) {
  document.querySelector('.selected') !== null && document.querySelector('.selected').classList.remove('selected');
  evento.target.classList.add('selected')
}