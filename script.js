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
  newInput.type = 'text';
  newInput.min = '1';
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

// Requisito 5 - Adicione um botão com id="criar-tarefa" ...(continua na linha 53)
function addButton() {
  const newButton = document.createElement('button');
  newButton.id = 'criar-tarefa';
  newButton.innerHTML = 'Adicionar Tarefa';
  callParentOl.insertBefore(newButton, callOl);
}
addButton();

// Requisito 7 e 8 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)(7) e Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo(8).
function selectTask(event) {
  const callTask = document.querySelectorAll('.task');
  if (event.target.classList.contains('backgroundRgb')) {
    event.target.classList.remove('backgroundRgb');
  } else {
      for (let i = 0; i < callTask.length; i += 1) {
      callTask[i].classList.remove('backgroundRgb');
      event.target.classList.add('backgroundRgb');
    }    
  }
}

// Continuação Requisito 5, 6 e 9 - ...ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo(5) e Ordene os itens da lista de tarefas por ordem de criação(6). E Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item(9).
function completeTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function addTask() {
  const callInput = document.getElementById('texto-tarefa');
  if (callInput.value.length === 0) {
    alert('Erro: Texto vazio')
  } else {
    const newLi = document.createElement('li');
    newLi.className = 'task';
    newLi.innerHTML = callInput.value;
    callOl.appendChild(newLi);
    callInput.value = '';
    newLi.addEventListener('click', selectTask);
    newLi.addEventListener('dblclick', completeTask);
  }
}

const callButton = document.querySelector('#criar-tarefa');
callButton.addEventListener('click', addTask);

// Requisito 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista.
function removeAllTasks() {
  const getOl = document.querySelector('#lista-tarefas');
  const size = getOl.childNodes.length;
  for (let i = 0; i < size; i += 1) {
    getOl.childNodes[0].remove();
  }
}

function deleteAllTasks() {
  const createButtonDeleteAll = document.createElement('button');
  createButtonDeleteAll.id = 'apaga-tudo';
  createButtonDeleteAll.innerHTML = 'Remover todos os itens da lista';
  callParent.insertBefore(createButtonDeleteAll, callScript);
  createButtonDeleteAll.addEventListener('click', removeAllTasks)
}
deleteAllTasks();

// Requisito 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista.
function deleteCompletedTasks() {
  const callLiCompleted = document.querySelectorAll('.completed');
  console.log(callLiCompleted);
  for (let i = 0; i < callLiCompleted.length; i += 1) {
    callLiCompleted[i].remove();
  }
}

function removeCompletedTasks() {
  const createButtonRemoveCompletedTasks = document.createElement('button');
  createButtonRemoveCompletedTasks.id = 'remover-finalizados';
  createButtonRemoveCompletedTasks.innerHTML = 'Remover Tarefas Finalizadas';
  callParent.insertBefore(createButtonRemoveCompletedTasks, callScript);
  createButtonRemoveCompletedTasks.addEventListener('click', deleteCompletedTasks)
}
removeCompletedTasks();