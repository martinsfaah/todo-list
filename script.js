// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão,
// um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
const oList = document.createElement('ol');

function createOl() {
  document.querySelector('#lista-tarefas-section').appendChild(oList);
  oList.id = 'lista-tarefas';
}
createOl();

function createList() {
  let inputPlace = document.querySelector('#texto-tarefa');
  
  let buttonInput = document.querySelector('#criar-tarefa');
  buttonInput.addEventListener('click', function () {
    
    const lists = document.createElement('li');
    lists.innerHTML = inputPlace.value;

    document.querySelector('#lista-tarefas').appendChild(lists);

    inputPlace.value = '';
  });
}

createList();
