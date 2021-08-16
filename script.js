const button = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function addTask() {
  const stringText = document.querySelector('#texto-tarefa').value;
  const createList = document.createElement('li');
  createList.id = 'listItem';
  createList.innerHTML = stringText;
  taskList.appendChild(createList);
  document.querySelector('#texto-tarefa').value = '';
  createList.addEventListener('click', clickGray);
  createList.addEventListener('dblclick', lineThrough);
}

button.addEventListener('click', addTask);

function clickGray(event) {
  let li = event.target
//pinte todas as li`s diferentes da target de branco
  for (i=0; i<document.querySelectorAll('#listItem').length; i++){
    if (document.querySelectorAll('#listItem')[i] !== li){
      document.querySelectorAll('#listItem')[i].style.backgroundColor = 'rgb(255, 255, 255)'
    }   
  }
//troque a cor da li target
  if (li.style.backgroundColor === "rgb(128, 128, 128)"){
    li.style.backgroundColor = 'rgb(255, 255, 255'
  } else {
    li.style.backgroundColor = 'rgb(128, 128, 128'
  }
}

function lineThrough(event) {
  let li = event.target
  if (li.className === ""){
      li.className = 'completed'
  } else {
      li.className = ""
  }
}