const accessButton = document.querySelector('#criar-tarefa');
const accessOl = document.querySelector('#lista-tarefas');
const accessInput = document.querySelector('#texto-tarefa');
const accessDelete = document.querySelector('#apaga-tudo')

function addText() {
  const createLi = document.createElement('li');
  createLi.innerText = accessInput.value;
  createLi.classList.add('schedule')
  accessOl.appendChild(createLi);
  accessInput.value = ''; 
}

accessButton.addEventListener('click', addText)

function deleteList() {
  accessOl.innerText = ''
}

accessDelete.addEventListener('click', deleteList)