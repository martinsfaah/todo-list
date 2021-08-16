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
    // lists.classList.add('item-List');
    // event.target.style.backgroundColor = 'rgb(128,128,128)'

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
  // oList.addEventListener('dblclick', function (event) {
  //   event.target.classList.toggle('completed');
  // });

  oList.addEventListener('dblclick', function(event){
    event.target.classList.toggle('completed')

  })

}

createOl();
createList();
selectItens();
completedItens();
