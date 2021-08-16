const accessButton = document.querySelector('#criar-tarefa');
const accessOl = document.querySelector('#lista-tarefas');
const accessInput = document.querySelector('#texto-tarefa');

function addText() {
  const createLi = document.createElement('li');
  createLi.innerText = accessInput.value;
  accessOl.appendChild(createLi);
  accessInput.value = ''; 
}

accessButton.addEventListener('click', addText)
