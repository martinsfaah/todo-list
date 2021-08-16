const accessButton = document.querySelector('#criar-tarefa')
const accessOl = document.querySelector('#lista-tarefas')
const accessInput = document.querySelector('#texto-tarefa')

accessButton.addEventListener('click', addText)

function addText() {
  const createLi = document.createElement('li');
  createLi.innerText = accessInput.value;
  accessOl.appendChild(createLi);
  accessInput.value = ''; 
}


