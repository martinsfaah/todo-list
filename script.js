// Requisito 5
const botaoAdicionar = document.getElementById('criar-tarefa');
let tarefa = document.getElementById('texto-tarefa');
let listaTarefa = document.getElementById('lista-tarefas');
function criandoTarefa() {
  let lista = document.createElement('li');
  listaTarefa.appendChild(lista);
  lista.innerText = tarefa.value;
  tarefa.value = '';
  lista.addEventListener('click', deixandoCinza);
}
botaoAdicionar.addEventListener('click', criandoTarefa);

// Requisito 7
let itemLista = document.getElementsByTagName('li');
function deixandoCinza(event) {
  for (let index = 0; index < itemLista.length; index += 1) {
   itemLista[index].style.backgroundColor = 'white'; 
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

