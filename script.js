const accessButton = document.querySelector('#criar-tarefa');
const accessOl = document.querySelector('#lista-tarefas');
const accessInput = document.querySelector('#texto-tarefa');
const accessDelete = document.querySelector('#apaga-tudo')

function addText() {
  const createLi = document.createElement('li');
  createLi.innerText = accessInput.value;
  createLi.classList.add('list');
  accessOl.appendChild(createLi);
  accessInput.value = ''; 
  createLi.addEventListener('dblclick', completedTask)
  createLi.addEventListener('click', paint)
}

accessButton.addEventListener('click', addText)

function deleteList() {
  accessOl.innerText = ''
}

accessDelete.addEventListener('click', deleteList)

function completedTask(event) {
 if (event.target.style.textDecoration == ''){
  event.target.style.textDecoration = 'line-through'
 }
 else if (event.target.style.textDecoration = '') {
  }
}

function paint(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
