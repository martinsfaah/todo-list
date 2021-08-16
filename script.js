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

function eraseList() {
  let eraseButton = document.querySelector('#apaga-tudo');
  eraseButton.addEventListener('click', function () {
    let eachItem = document.querySelectorAll('.item-List');

    for (let idx2 = 0; idx2 < eachItem.length; idx2 += 1) {
      eachItem[idx2].remove();
    }
  });
}

eraseList();

function eraseCompleted() {
  let eraseCompleted = document.querySelector('#remover-finalizados');
  eraseCompleted.addEventListener('click', function erasing() {
    let completedItem = document.querySelectorAll('.completed');

    console.log(completedItem);
    for (let idx3 = 0; idx3 < completedItem.length; idx3 += 1) {
      completedItem[idx3].remove();
      // if (completedItem[idx3].classList.includes('completed')) {
      // }
    }
  });
}

eraseCompleted();

// Remover item por item
// let eraseButton = document.querySelector('#apaga-tudo');
// eraseButton.addEventListener('click', function eraseList() {
//   let eachItem = document.querySelector('.item-List');
//   eachItem.remove();
// });

createOl();
createList();
selectItens();
completedItens();
// eraseList();
