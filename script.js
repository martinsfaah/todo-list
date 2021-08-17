// Requisito 5
const botaoAdicionar = document.getElementById('criar-tarefa');
const tarefa = document.getElementById('texto-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');
function criandoTarefa() {
  const lista = document.createElement('li');
  listaTarefa.appendChild(lista);
  lista.innerText = tarefa.value;
  tarefa.value = '';
  lista.addEventListener('click', deixandoCinza); 
  lista.addEventListener('dblclick', riscando);
}
botaoAdicionar.addEventListener('click', criandoTarefa);

// Requisito 7
const itemLista = document.getElementsByTagName('li');
function deixandoCinza(event) {
  for (let index = 0; index < itemLista.length; index += 1) {
    itemLista[index].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

// Requisito 9
function riscando(event) {
  if (event.target.className === 'completed'){
    event.target.classList.remove('completed');
  } else {
    event.target.className = 'completed';
  }
}

// Requisito 10
let botaoApagar = document.getElementById('apaga-tudo')
function apagando() {
  let itens = document.getElementsByTagName('li');
  let listaTarefa = document.getElementById('lista-tarefas');
  for (let index = itens.length - 1; index >= 0 ; index -= 1) {
  listaTarefa.removeChild(itens[index])
  }
}
botaoApagar.addEventListener('click', apagando)

// // Requisito 11
// Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista
let botaoRemover = document.getElementById('remover-finalizados')
function removendo() {
  let finalizados = document.getElementsByClassName('completed')
  for (let index = finalizados.length - 1; index >= 0 ; index -= 1) {
  finalizados[index].remove()
  }
}
botaoRemover.addEventListener('click', removendo)

// // Todos os elementos da classe 'completed': removeChild
// // classe presentes nos <li>. Pedir para remover da <ol>
