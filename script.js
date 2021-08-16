function criarTarefa() {
  const tarefa = document.getElementById('texto-tarefa').value;
  const lista = document.getElementById('lista-tarefas');
  const novaTarefa = document.createElement('li');
  novaTarefa.className = 'item';
  novaTarefa.innerHTML = tarefa;
  lista.appendChild(novaTarefa);
  document.getElementById('texto-tarefa').value = '';
  novaTarefa.addEventListener('click', corDoFundo);
}

const botao = document.querySelector('#criar-tarefa');
botao.addEventListener('click', criarTarefa);

function corDoFundo(event) {
  const itemList = event.target;
  itemList.style.backgroundColor = 'rgb(128, 128, 128)';
}
