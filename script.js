const header = document.createElement('header');
const tagh1 = document.createElement('h1');
const tagSectionCabecalho = document.createElement('section');
const input = document.createElement('input');
const listaOrdenada = document.createElement('ol');

tagh1.innerText = 'Minha Lista de Tarefas';
tagSectionCabecalho.id = 'funcionamento';
tagSectionCabecalho.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
input.id = 'texto-tarefa';
listaOrdenada.id = 'lista-tarefas';

function bodyChild(element) {
  document.body.appendChild(element);
}

function childAppend(elementoPai, elementoFilho) {
  elementoPai.appendChild(elementoFilho);
}

bodyChild(header);
bodyChild(tagSectionCabecalho);
childAppend(header, tagh1);
bodyChild(input);
bodyChild(listaOrdenada);
