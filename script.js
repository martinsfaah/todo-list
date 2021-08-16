// Cria uma tarefa baseada no input
const btnCriarTarefa = document.getElementById('criar-tarefa');
function criarTarefa() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const novaTarefa = document.createElement('li');
  const input = document.getElementById('texto-tarefa').value;
  listaTarefas.appendChild(novaTarefa).innerText = input;
  document.getElementById('texto-tarefa').value = '';
}

// Altera a cor de fundo ao clicar sobre uma tarefa
function trocaCor() {
  this.style.backgroundColor = 'rgb(128, 128, 128)';
}

// Atualiza a lista de tarefas após adicionar
function atualizaLista() {
  const lista = document.querySelectorAll('li');
  for (let i = 0; i < lista.length; i += 1) {
    lista[i].addEventListener('click', trocaCor);
  }
}

btnCriarTarefa.addEventListener('click', criarTarefa);
btnCriarTarefa.addEventListener('click', atualizaLista);
