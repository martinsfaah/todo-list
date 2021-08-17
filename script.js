const input = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const btnApgTudo = document.getElementById('apaga-tudo');
const btnApgFinish = document.getElementById('remover-finalizados');

btnApgFinish.addEventListener('click', () => {
  const listCompleted = document.querySelectorAll('.completed');
  for(let index = 0; index < listCompleted.length; index += 1){
    listCompleted[index].remove();
  }
 
  while (ol.classList.contains('completed')) {
    ol.removeChild(ol.childNodes);
  }
});

btnApgTudo.addEventListener('click', () => {
  while (ol.firstChild) {
    ol.removeChild(ol.lastChild);
  }
});

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = input.value;
  li.className = 'list';
  ol.appendChild(li);
  const list = document.querySelectorAll('.list');
  if (list.length === 1) {
    li.className = 'list selected';
  }
  input.value = '';
});

function selectColor(event) {
  const list = document.querySelectorAll('.list');
  const selectCor = 'rgb(128, 128, 128)';
  const color = event.target;
  for (let index = 0; index < list.length; index += 1) {
    list[index].style.background = 'white';
  }
  color.style.backgroundColor = selectCor;
}

function selectTarefa(event) {
  const listSelected = document.querySelector('.selected');

  listSelected.classList.remove('selected');
  event.target.classList.add('selected');

  selectColor(event);
}

ol.addEventListener('click', selectTarefa);
ol.addEventListener('dblclick', (event) => {
  const decoration = 'line-through solid rgb(0, 0, 0)';
  const mudaText = event.target;
  if (event.target.style.textDecoration === decoration) {
    mudaText.style.textDecoration = 'none';
    mudaText.classList.remove('completed');
  } else {
    mudaText.style.textDecoration = decoration;
    mudaText.classList.add('completed');
  }
});
