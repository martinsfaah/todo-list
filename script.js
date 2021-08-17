const header = document.createElement('header');
const tagh1 = document.createElement('h1');
const tagSectionCabecalho = document.createElement('section');

tagh1.innerText = 'Minha Lista de Tarefas';
tagSectionCabecalho.id = 'funcionamento';
tagSectionCabecalho.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

function bodyChild(element) {
  document.body.appendChild(element);
}

function childAppend(elementoPai, elementoFilho) {
  elementoPai.appendChild(elementoFilho);
}

bodyChild(header);
bodyChild(tagSectionCabecalho);
childAppend(header, tagh1);
