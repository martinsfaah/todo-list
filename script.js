const listItens = document.getElementById('lista-tarefas');
const buttonDelete = document.querySelector('#apaga-tudo');
const buttonRemoveCompleted = document.querySelector('#remover-finalizados');
const buttonList = document.querySelector('#criar-tarefa');
const inputList = document.querySelector('#texto-tarefa');
const arraylist = listItens.children;
const buttonSaveList = document.querySelector('#salvar-tarefas');

buttonList.addEventListener('click', createList);
function createList() {
  let list = document.createElement('li');
  list.innerHTML = inputList.value;

  document.querySelector('#lista-tarefas').appendChild(list);

  inputList.value = '';
}

function turnToGrey(str) {
  listItens.addEventListener('click', function (event) {
    for (let index = 0; index < arraylist.length; index += 1) {
      if (arraylist[index].style.backgroundColor === str) {
        arraylist[index].style.backgroundColor = 'white';
      }
    }
    event.target.style.backgroundColor = str;
  });
}

function stripeText() {
  listItens.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');

  });
}

buttonDelete.addEventListener('click', deleteAll);
function deleteAll() {
  let arraylistDelete = document.querySelectorAll('li');
  for (let index = 0; index < arraylistDelete.length; index += 1) {
    arraylistDelete[index].remove();
  }

  localStorage.clear();
}

buttonRemoveCompleted.addEventListener('click', deleteCompleted);
function deleteCompleted() {
  let listStripe = document.querySelectorAll('.completed');
  for (let index = 0; index < listStripe.length; index += 1) {
    listStripe[index].remove();
  }
}

buttonSaveList.addEventListener('click', saveList);

function saveList() {
  let listWillSave = document.querySelector('#lista-tarefas').children;

  for (let index = 0; index < listWillSave.length; index += 1) {
    localStorage.setItem('li' + [index], listWillSave[index].innerHTML);
    localStorage.setItem('class' + [index], listWillSave[index].className)

  }
}

function loadLists() {
  for (let index = 0; index < localStorage.length / 2; index += 1) {
    let reloadList = document.createElement('li');
    reloadList.innerHTML = localStorage.getItem("li" + index);
    reloadList.className = localStorage.getItem("class" + index)
    document.querySelector('#lista-tarefas').appendChild(reloadList);
  }
}
stripeText();
deleteCompleted();
turnToGrey('rgb(128, 128, 128)');
loadLists();
