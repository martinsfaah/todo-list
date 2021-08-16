const listItens = document.getElementById('lista-tarefas');
const buttonDelete = document.querySelector('#apaga-tudo');
const buttonRemoveCompleted = document.querySelector('#remover-finalizados');
const buttonList = document.querySelector('#criar-tarefa');
const inputList = document.querySelector('#texto-tarefa');
const  arraylist = listItens.children


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
}

buttonRemoveCompleted.addEventListener('click', deleteCompleted);
function deleteCompleted() {
  let listStripe = document.querySelectorAll('.completed');
  for (let index = 0; index < listStripe.length; index += 1) {
    listStripe[index].remove()
  }
}
  

turnToGrey('rgb(128, 128, 128)');
stripeText()
deleteCompleted();
