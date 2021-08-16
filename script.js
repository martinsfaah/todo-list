const btnCriarTarefa = document.getElementById('criar-tarefa');
function criarTarefa() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const novaTarefa = document.createElement('li');
  const input = document.getElementById('texto-tarefa').value;
  listaTarefas.appendChild(novaTarefa).innerText = input;
  document.getElementById('texto-tarefa').value = '';
}
btnCriarTarefa.addEventListener('click', criarTarefa);
// Cria uma tarefa baseada no input

// Altera a cor de fundo ao clicar sobre uma tarefa e restringe a apenas uma seleção
function trocaCor() {
  const lista = document.querySelectorAll('li');
  for (let i = 0; i < lista.length; i += 1) {
    lista[i].style.backgroundColor = '';
  }
  this.style.backgroundColor = 'rgb(128, 128, 128)';
}

// Risca a tarefa após dois cliques
function tarefaConcluida() {
  if (this.className !== 'completed') {
    this.className = 'completed';
  } else this.classList.remove('completed');
}

// Atualiza a lista de tarefas após adicionar
function atualizaLista() {
  const lista = document.querySelectorAll('li');
  for (let i = 0; i < lista.length; i += 1) {
    lista[i].addEventListener('click', trocaCor);
    lista[i].addEventListener('dblclick', tarefaConcluida);
  }
}
btnCriarTarefa.addEventListener('click', atualizaLista);

// Apaga a lista de tarefas
const apagaTudo = document.querySelector('#apaga-tudo');
apagaTudo.addEventListener('click', () => {
  const listaOl = document.querySelector('#lista-tarefas');
  const elementos = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < elementos.length; i += 1) {
    listaOl.removeChild(elementos[i]);
  }
});

// Remove as tarefas finalizadas
const removeFinalizas = document.querySelector('#remover-finalizados');
removeFinalizas.addEventListener('click', () => {
  const listaFinalizadas = document.querySelectorAll('.completed');
  const listaOl = document.querySelector('#lista-tarefas');
  for (let i = 0; i < listaFinalizadas.length; i += 1) {
    listaOl.removeChild(listaFinalizadas[i]);
  }
});
