let oList = document.createElement('ol');

function createOl() {
  document.querySelector('#lista-tarefas-section').appendChild(oList);
  oList.id = 'lista-tarefas';
}

function createList() {
  const inputPlace = document.querySelector('#texto-tarefa');

  let buttonInput = document.querySelector('#criar-tarefa');
  buttonInput.addEventListener('click', function (event) {
    const lists = document.createElement('li');
    lists.innerHTML = inputPlace.value;
    lists.classList.add('item-List');

    document.querySelector('#lista-tarefas').appendChild(lists);

    inputPlace.value = '';
  });
}

function selectItens() {
  oList.addEventListener('click', function marker(event) {
    let oListArray = document.querySelector('#lista-tarefas').children;

    for (let idx = 0; idx < oListArray.length; idx += 1) {
      oListArray[idx].classList.remove('marked');
    }
    event.target.classList.add('marked');
  });
}

function completedItens() {
  oList.addEventListener('dblclick', function (clicado) {
    const compl = clicado;

    compl.target.classList.toggle('completed');
  });
}

function eraseContent() {
  // let currentList = document.querySelector('#lista-tarefas').children
  let eraseButton = document.querySelector('#apaga-tudo');
  eraseButton.addEventListener('click', function () {});

  
}

createOl();
createList();
selectItens();
completedItens();
eraseContent();
