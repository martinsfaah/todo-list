
const addBtn = document.getElementById('criar-tarefa'); // Botão de Criar tarefa
const ol = document.getElementById('lista-tarefas'); // Lista ordenada
const clearBtn = document.getElementById('apaga-tudo'); // Botão de CLEAR

function createTaskList () {
  const textInput = document.getElementById('texto-tarefa'); // Campo de input
  const li = document.createElement('li');
  li.innerText = textInput.value;
  ol.appendChild(li);
  textInput.value = '';
}
addBtn.addEventListener('click', createTaskList);

function changeBackgroundColor (event) {
  const selected = event.target;
  const oldSelected = document.querySelector('.selected');
  if(selected.classList.contains('selected')) {
    return;
  }
  if (selected.tagName === 'li') {
    selected.style.changeBackgroundColor = 'rgb(128,128,128)';
  }
  if (oldSelected) {
    oldSelected.classList.remove('selected');
    oldSelected.style.changeBackgroundColor = '';
  }
  selected.classList.add('selected');
}
ol.addEventListener('click', changeBackgroundColor);

function itenCompleted (event) {
  const completed = event.target;
  if (completed.style.textDecoration !== '') {
    completed.style.textDecoration = '';
    completed.classList.remove('completed');
    return;
  }
  completed.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  completed.classList.add('completed');

}
ol.addEventListener('dblclick', itenCompleted);

function clearList () {
  ol.textContent = '';
}
clearBtn.addEventListener('click', clearList);
