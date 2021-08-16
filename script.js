const listaTarefas = 'lista-tarefas';

function selectTask(event) {
  const eventObj = event;
  const todoList = document.getElementsByTagName('li');
  for (let index = 0; index < todoList.length; index += 1) {
    if (todoList[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      todoList[index].style.backgroundColor = '';
    }
  }
  eventObj.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function riskTask(event) {
  const eventObj = event;
  if (eventObj.target.className !== 'completed') {
    eventObj.target.className = 'completed';
  } else {
    eventObj.target.className = '';
  }
}

function addTasks() {
  const button = document.getElementById('criar-tarefa');
  const inputText = document.getElementById('texto-tarefa');
  const todoList = document.getElementById(listaTarefas);
  button.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.addEventListener('click', selectTask);
    newItem.addEventListener('dblclick', riskTask);
    newItem.innerHTML = inputText.value;
    inputText.value = '';
    todoList.appendChild(newItem);
  });
}

function removeAll() {
  const button = document.getElementById('apaga-tudo');
  button.addEventListener('click', () => {
    document.getElementById(listaTarefas).innerHTML = '';
  });
}

function removeFinished() {
  const button = document.getElementById('remover-finalizados');
  button.addEventListener('click', () => {
    const listaCompleta = document.getElementsByClassName('completed');
    if (listaCompleta.length > 0) {
      const listSize = listaCompleta.length;
      for (let index = 0; index < listSize; index += 1) {
        listaCompleta[0].remove();
      }
    }
  });
}

function saveList() {
  const saveBttn = document.getElementById('salvar-tarefas');
  saveBttn.addEventListener('click', () => {
    const listaAtual = document.getElementById(listaTarefas);
    localStorage.setItem('lista', listaAtual.innerHTML);
  });
}

function getSavedList() {
  if (localStorage.getItem('lista') !== null) {
    const savedString = localStorage.getItem('lista');
    const dummyDOM = document.createElement('html');
    dummyDOM.innerHTML = savedString;
    const savedItens = dummyDOM.getElementsByTagName('li');
    const numberOfItens = savedItens.length;
    const todoList = document.getElementById(listaTarefas);
    for (let index = 0; index < numberOfItens; index += 1) {
      savedItens[0].addEventListener('click', selectTask);
      savedItens[0].addEventListener('dblclick', riskTask);
      todoList.appendChild(savedItens[0]);
    }
  }
}

// function moveItem() {
//   const listItems = document.getElementsByTagName('li');
//   let atualPosition = -1;
//   for (let index = 0; index < listItems.length; index += 1) {
//     if (listItems[index].style.backgroundColor === 'rgb(128, 128, 128)') {
//       atualPosition = index;
//       break;
//     }
//   }
// }

addTasks();
removeAll();
removeFinished();
getSavedList();
saveList();
