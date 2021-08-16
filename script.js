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
  novoItem.addEventListener('dblclick', sublinha);

  listaTarefas.appendChild(novoItem);
  input.value = '';
}

const itensLista = document.querySelectorAll('li');

function corCinza(event) {
  let selecionado = document.querySelector('.selecionado');
  if (selecionado !== null) {
    selecionado.classList.remove('selecionado');
  }
  event.target.classList.add('selecionado');
}

function sublinha(event) {
  // let completo = document.querySelector('.completed');
  let classeClicado = event.target;
  if (classeClicado.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

const apagaTudo = document.querySelector('#apaga-tudo');
apagaTudo.addEventListener('click', function () {
  location.reload();
});
