let botao = document.getElementById('criar-tarefa');
botao.addEventListener('click', adicionaItem);

let input = document.getElementById('texto-tarefa');
input.addEventListener('input', recebeTexto);

let itemLista = document.createElement('li');

function recebeTexto(event) {
  itemLista.innerText = event.target.value;
}

let listaTarefas = document.querySelector('#lista-tarefas');

function adicionaItem(event) {
  let novoItem = document.createElement('li');
  novoItem.innerText = itemLista.innerText;
  listaTarefas.appendChild(novoItem);
  input.value = '';
}
