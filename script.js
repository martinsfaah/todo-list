function criaTarefa() {
  if (document.querySelector('#texto-tarefa').value) {
    let tarefa = document.querySelector('#texto-tarefa');
    const novoElementoLista = document.createElement('li');
    novoElementoLista.innerText = tarefa.value;
    document.querySelector('#lista-tarefas').appendChild(novoElementoLista);
    tarefa.value = '';
  }
}