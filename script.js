const header = document.createElement('header');
const tagh1 = document.createElement('h1');
const tagSectionCabecalho = document.createElement('section');
const input = document.createElement('input');
const listaOrdenada = document.createElement('ol');
const buttonCriarTarefa = document.createElement('button');

tagh1.innerText = 'Minha Lista de Tarefas';
tagSectionCabecalho.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

function criaID(elemento, ID) {
  elemento.id = ID;
}

function bodyChild(element) {
  document.body.appendChild(element);
}

function childAppend(elementoPai, elementoFilho) {
  elementoPai.appendChild(elementoFilho);
}

function botaoCriarTarefa() {
  const textoValue = document.querySelector('#texto-tarefa');
  const ordenedList = document.querySelector('#lista-tarefas');

  buttonCriarTarefa.addEventListener('click', function(event) {
      let newLi = document.createElement('li');
      newLi.innerText = textoValue.value;
      ordenedList.appendChild(newLi);
      textoValue.value = "";
  }); 
}

bodyChild(header);
bodyChild(tagSectionCabecalho);
childAppend(header, tagh1);
bodyChild(input);
bodyChild(listaOrdenada);
bodyChild(buttonCriarTarefa);
criaID(tagSectionCabecalho, 'funcionamento');
criaID(input, 'texto-tarefa');
criaID(listaOrdenada, 'lista-tarefas');
criaID(buttonCriarTarefa, 'criar-tarefa');
botaoCriarTarefa();
