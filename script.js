const botaoAdicionar = document.getElementById('criar-tarefa');
let tarefa = document.getElementById('texto-tarefa');
let listaTarefa = document.getElementById('lista-tarefas');

function criandoTarefa() {
  let lista = document.createElement('li');
  listaTarefa.appendChild(lista);
  lista.innerText = tarefa.value;
  tarefa.value = '';
}
botaoAdicionar.addEventListener('click', criandoTarefa);