// Requisitos 1 e 2 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag(1) e Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"(2).
const callScript = document.getElementById('script');
const callParent = callScript.parentNode;

function addHeaderAndParagraph() {
  const newHeader = document.createElement('header');
  const newParagraph = document.createElement('p');
  newParagraph.id = 'funcionamento';
  newParagraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
  newHeader.innerHTML = 'Minha Lista de Tarefas';
  callParent.insertBefore(newHeader, callScript);
  callParent.insertBefore(newParagraph, callScript);
}
addHeaderAndParagraph();

// Requisito 3 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista.
function createInput() {
  const newInput = document.createElement('input');
  newInput.id = 'texto-tarefa';
  callParent.insertBefore(newInput, callScript);
}
createInput();

// Adicione uma lista ordenada de tarefas com o id="lista-tarefas"
function addOl() {
  const newOl = document.createElement('ol');
  newOl.id = 'lista-tarefas';
  callParent.insertBefore(newOl, callScript);
}
addOl();