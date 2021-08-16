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

// Requisito 4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"
function addOl() {
  const newOl = document.createElement('ol');
  newOl.id = 'lista-tarefas';
  callParent.insertBefore(newOl, callScript);
}
addOl();

const callOl = document.getElementById('lista-tarefas');
const callParentOl = callOl.parentNode;

// Requisito 5 e 6 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo(5) e Ordene os itens da lista de tarefas por ordem de criação(6).
function addButton() {
  const newButton = document.createElement('button');
  newButton.id = 'criar-tarefa';
  newButton.innerHTML = 'Adicionar Tarefa';
  callParentOl.insertBefore(newButton, callOl);
}
addButton();

function addTask() {
  const callInput = document.getElementById('texto-tarefa');
  const newLi = document.createElement('li');
  newLi.className = 'task';
  newLi.innerHTML = callInput.value;
  callOl.appendChild(newLi);
  callInput.value = '';
  const callTask = document.querySelectorAll('.task')
  for (let i = 0; i < callTask.length; i += 1) {
    console.log(callTask[i]);
    callTask[i].addEventListener('click', selectTask);
  }
}

const callButton = document.querySelector('#criar-tarefa');
callButton.addEventListener('click', addTask)

// Requisito 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128).
function selectTask(event) {
  const callTask = document.querySelectorAll('.task')
  for (let i = 0; i < callTask.length; i += 1) {
    callTask[i].style.backgroundColor = 'white';
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  }
}