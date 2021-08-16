function selecionaTarefa(evento) {
  const itensLista = document.getElementsByClassName('item');
  const itemSelecionado = evento.target;
  for (let i = 0; i < itensLista.length; i += 1) {
    itensLista[i].style.backgroundColor = 'white';
    itemSelecionado.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function tarefaCompleta(evento) {
  const itemCompleto = evento.target;
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
  itemCompleto.classList.toggle('completed');
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
  novaTarefa.addEventListener('dblclick', tarefaCompleta);
}

const botao = document.querySelector('#criar-tarefa');
botao.addEventListener('click', criarTarefa);

/* function limpaTarefas() {
  // ref: http://devfuria.com.br/javascript/dom-remove-child/
  const lista = document.getElementsByTagName('ol');
  const itens = document.getElementsByTagName('li');
  lista.removeChild(itens[0]);
} */

function limpaTarefas() {
  const lista = document.getElementById('lista-tarefas');
  lista.innerHTML = '';
}

const limpar = document.getElementById('apaga-tudo');
limpar.addEventListener('click', limpaTarefas);
