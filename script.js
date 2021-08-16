function selecionaTarefa(evento) {
  const itensLista = document.getElementsByClassName('item');
  const itemSelecionado = evento.target;
  for (let i = 0; i < itensLista.length; i += 1) {
    itensLista[i].style.backgroundColor = 'white';
    itemSelecionado.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function criarTarefa() {
  const tarefa = document.getElementById('texto-tarefa').value;
  const lista = document.getElementById('lista-tarefas');
  const novaTarefa = document.createElement('li');
  novaTarefa.className = 'item';
  novaTarefa.innerHTML = tarefa;
  lista.appendChild(novaTarefa);
  document.getElementById('texto-tarefa').value = '';
  novaTarefa.addEventListener('click', selecionaTarefa);
}

const botao = document.querySelector('#criar-tarefa');
botao.addEventListener('click', criarTarefa);
