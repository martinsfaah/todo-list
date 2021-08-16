// Cria uma tarefa baseada no input
const btnCriarTarefa = document.getElementById('criar-tarefa');
function criarTarefa() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const novaTarefa = document.createElement('li');
  const input = document.getElementById('texto-tarefa').value;
  listaTarefas.appendChild(novaTarefa).innerText = input;
  document.getElementById('texto-tarefa').value = '';
}
btnCriarTarefa.addEventListener('click', criarTarefa);
