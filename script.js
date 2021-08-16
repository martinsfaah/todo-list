const getTarefas = document.getElementById('texto-tarefa');
const getListaTarefas = document.getElementById('lista-tarefas');
const getInput = document.getElementById('texto-tarefa');
const getButton = document.getElementById('criar-tarefa');

window.onload = createList();
function createList() {  
  const ol = document.createElement('ol');
  getListaTarefas.appendChild(ol);  
  
 /*  if (getTarefasValue !== undefined && checkList === false){
    ul.innerText = getTarefasValue
  }   */
  
}
function checkList(compara) {
  let ulList = document.getElementsByTagName('li');
  for (let checkList = 0; checkList < ulList.length; checkList += 1) {
    if(ulList[checkList] === compara) {
      return true;
    }
          
  }  
}
function addList() {
  let getTarefasValue = document.getElementById('texto-tarefa').value;
  if(checkList(getTarefasValue) === true){
    console.log("List cannot have double items")
  } else {
    let li = document.createElement('li');
    li.innerText = getTarefasValue;
    li.addEventListener('ondblclick', function(event) {
    event.target.style.backgroundColor = "rgb(128,128,128)"
    ;
  })
  document.querySelector('ol').appendChild(li);
  getTarefasValue = ""
  }
}
getButton.addEventListener('click', addList)