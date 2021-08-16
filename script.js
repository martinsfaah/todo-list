function criarTarefa() {
  const tarefa = document.getElementById('texto-tarefa').value;
  const lista = document.getElementById('lista-tarefas');
  const novaTarefa = document.createElement('li');
  novaTarefa.innerHTML = tarefa;
  lista.appendChild(novaTarefa);
  document.getElementById('texto-tarefa').value = '';
}

const botao = document.querySelector('#criar-tarefa');
botao.addEventListener('click', criarTarefa);
