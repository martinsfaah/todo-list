const ol = document.querySelector('ol');
const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
button.addEventListener('click', addListItem);
function addListItem() {
  let newLi = document.createElement('li');
  newLi.innerText = input.value;
  ol.appendChild(newLi);
  input.value = '';
  let li = document.getElementsByTagName('li');
  for (let index of li) {
    index.addEventListener('click', addGreyColor);
    index.addEventListener('dblclick', lineThrough);
  }
}

function addGreyColor(event) {
  let li = document.getElementsByTagName('li');
  for (const index of li) {
    index.style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function lineThrough(event) {
  if (event.target.className === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

const eraseButton = document.getElementById('apaga-tudo');
eraseButton.addEventListener('click', eraseTaskList);
function eraseTaskList() {
  ol.innerText = '';
}

const eraseDoneTasks = document.getElementById('remover-finalizados');
eraseDoneTasks.addEventListener('click', eraseOnlyDones);
function eraseOnlyDones() {
  let completed = document.querySelectorAll('.completed');
  for (const element of completed) {
    element.remove();
  }
}

const saveTasks = document.querySelector('#salvar-tarefas');
saveTasks.addEventListener('click', saveToLocal);
let saveLi = [];
function saveToLocal() {
  let li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    saveLi.push(li[index].innerText);
  }
  localStorage.setItem('tasks', JSON.stringify(saveLi));
  addClassToLocal();
}
let arrayClasses = [];
function addClassToLocal() {
  const saveClass = document.querySelectorAll('li');
  for (let index = 0; index < saveClass.length; index += 1) {
    arrayClasses.push(saveClass[index].className);
  }
  localStorage.setItem('classes', JSON.stringify(arrayClasses));
}

window.onload = function initialState() {
  let savedLi;
  let savedLi2;
  if (localStorage.getItem('tasks') !== null && localStorage.getItem('classes') !== null ) {
    savedLi = JSON.parse(localStorage.getItem('tasks'));
    savedLi2 = JSON.parse(localStorage.getItem('classes'));
    for (let index = 0; index < savedLi.length; index += 1) {
    let li = document.createElement('li');
    li.innerText = savedLi[index];
    li.className = savedLi2[index];
    li.addEventListener('click', addGreyColor);
    li.addEventListener('dblclick', lineThrough);
    ol.appendChild(li);
    }
  }
}

const upButton = document.querySelector('#mover-cima');
upButton.addEventListener('click', switchIndex);
function switchIndex() {
  let lista = document.querySelectorAll('li');
  let colorRgb = 'rgb(128, 128, 128)';
  for( let index = 1; index < lista.length; index += 1) {
    if(lista[index].style.backgroundColor === colorRgb) {
      ol.insertBefore(lista[index], lista[index-1]);
    }
  }
}

const downButton = document.querySelector('#mover-baixo');
downButton.addEventListener('click', switchIndex2);
function switchIndex2() {
  let lista = document.querySelectorAll('li');
  let colorRgb = 'rgb(128, 128, 128)';
  for( let index = 0; index < lista.length; index += 1) {
    if(lista[index].style.backgroundColor === colorRgb) {
      ol.insertBefore(lista[index], lista[index+2]);
    }
  }
}