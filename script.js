const botao = document.getElementById('criar-tarefa');
botao.addEventListener('click', adicionaItem);

const input = document.getElementById('texto-tarefa');
input.addEventListener('input', recebeTexto);

const textoInput = document.createElement('li');

function recebeTexto(event) {
  textoInput.innerText = event.target.value;
}

const listaTarefas = document.querySelector('#lista-tarefas');

function adicionaItem(event) {
  const novoItem = document.createElement('li');
  novoItem.innerText = textoInput.innerText;
  novoItem.addEventListener('click', corCinza);
  listaTarefas.appendChild(novoItem);
  input.value = '';
}

const itensLista = document.querySelectorAll('li');

function corCinza(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
