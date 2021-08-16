const input = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const li = document.createElement('li');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = input.value; 
  li.className = 'list';
  ol.appendChild(li);
  const list = document.querySelectorAll('.list');
  if (list.length === 1) {
    li.className = 'list selected'
  }
  input.value = '';
});

function selectColor(event) {
  const list = document.querySelectorAll('.list');
  const selectCor = 'rgb(128, 128, 128)';
  const color = event.target;
  for(let index = 0; index < list.length; index += 1){
    list[index].style.background = 'white';
  }

  color.style.backgroundColor = selectCor;
    
}

function selectTarefa(event) {
  const list = document.createElement('li');
  const listSelected = document.querySelector('.selected');  
  if (list.length === 1) {
    event.target.classList.add('selected');    
  } else {
    listSelected.classList.remove('selected');
    event.target.classList.add('selected');
  }
  selectColor(event);
}
const listLi = document.getElementById('lista-tarefas');
listLi.addEventListener('click', selectTarefa);
//listLi.addEventListener('click', selectColor);
