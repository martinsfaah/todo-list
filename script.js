const getTarefas = document.getElementById('texto-tarefa');
const getListaTarefas = document.getElementById('lista-tarefas');
const getInput = document.getElementById('texto-tarefa');
const getButton = document.getElementById('criar-tarefa');
const pageColor = document.getElementsByTagName('body')[0].style.backgroundColor;

window.onload = createList();
function createList() {  
  const ol = document.createElement('ol');
  getListaTarefas.appendChild(ol)
}

function checkList(compara) {
  let ulList = document.getElementsByTagName('li');
  for (let checkList = 0; checkList < ulList.length; checkList += 1) {
    if(ulList[checkList].innerText === compara) {
      return true;
    }       
  }
}
function checkBGColor() {
  let compara = 'rgb(128,128,128)';
  let liList = document.getElementsByTagName('li');
  for (let checkList = 0; checkList < liList.length; checkList += 1) {
    liList[checkList].style.backgroundColor = '#333';
  }   
}
function addBGGrey(event) {
  event.target.style.backgroundColor = "rgb(128,128,128)";
}
function addOrRemoveClass(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function addList() {
  let getTarefasValue = document.getElementById('texto-tarefa').value;
  if(checkList(getTarefasValue) === true){
    alert("List cannot have double items");
  } else {
    let li = document.createElement('li');
    li.innerText = getTarefasValue;
    li.addEventListener('click', checkBGColor, false);
    li.addEventListener('click', addBGGrey, false);
    li.addEventListener('dblclick', addOrRemoveClass, false);   

    document.querySelector('ol').appendChild(li);  
  }
  document.getElementById('texto-tarefa').value = '';
}
getButton.addEventListener('click', addList);

