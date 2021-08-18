document.body.style.backgroundColor = '#5bded6';

// Desafio 1
const header = document.createElement('header');
header.innerText = 'Minha Lista de Tarefas';
const body = document.querySelector('body');
body.appendChild(header);

// Desafio 2
const paragraph = document.createElement('p');
paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
paragraph.id = 'funcionamento';

header.appendChild(paragraph);

// Desafio 3
const input = document.createElement('input');
input.id = 'texto-tarefa';
const main = document.createElement('main');
body.appendChild(main);
main.appendChild(input);

// Desafio 5 ...
const taskButton = document.createElement('button');
taskButton.id = 'criar-tarefa';
taskButton.innerText = 'Adicionar';
main.appendChild(taskButton);

// Desafio 4
const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
main.appendChild(taskList);

// ... Desafio 5
function addListItem() {
  const lineTaskList = document.createElement('li');
  lineTaskList.innerText = input.value;
  taskList.appendChild(lineTaskList);
  input.value = '';
}
taskButton.addEventListener('click', addListItem);

// Desafio 6 check

// Desafio 7 e 8
function resetColor() {
  const liTarget = document.querySelectorAll('li');
  for (let index = 0; index < liTarget.length; index += 1) {
    liTarget[index].style.backgroundColor = '';
  }
}

const taskListTarget = document.getElementById('lista-tarefas');
function paintLine(event) {
  resetColor();
  event.target.style.background = 'rgb(128, 128, 128)';
}
taskListTarget.addEventListener('click', paintLine);

// Desafio 9
function riskLine(event) {
  const evento = event.target;
  if (evento.className !== 'completed') {
    evento.className += 'completed';
  } else {
    evento.className = '';
  }
}
taskListTarget.addEventListener('dblclick', riskLine);

// Desafio 10
const resetListButton = document.createElement('button');
resetListButton.innerText = 'Reset';
resetListButton.id = 'apaga-tudo';
main.appendChild(resetListButton);

const lista = document.getElementById('lista-tarefas');

resetListButton.addEventListener('click', () => {
  lista.innerHTML = '';
});

// Desafio 11

const clearCompleted = document.createElement('button');
clearCompleted.innerText = 'Apagar';
clearCompleted.id = 'remover-finalizados';
main.appendChild(clearCompleted);

clearCompleted.addEventListener('click', () => {
  const elementCompleted = document.getElementsByClassName('completed');
  for (let index = elementCompleted.length - 1; index >= 0; index -= 1) {
    elementCompleted[index].remove();
  }
});

// Desafio 12 - BONUS
const storageButton = document.createElement('button');
storageButton.id = 'salvar-tarefas';
storageButton.innerText = 'Salvar';
main.appendChild(storageButton);

function saveStorage() {
  const locStorage = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('saveUserList', locStorage);
}
storageButton.addEventListener('click', saveStorage);

function saveReload() {
  const saveReloading = document.getElementById('lista-tarefas');
  saveReloading.innerHTML = localStorage.getItem('saveUserList');
}
saveReload();

// Desafio 13
const upButton = document.createElement('button');
const downButton = document.createElement('button');
upButton.id = 'mover-cima';
downButton.id = 'mover-baixo';
upButton.innerText = '↑';
downButton.innerText = '↓';
main.appendChild(upButton);
main.appendChild(downButton);

function moveUp() {
  const selectedItem = document.querySelectorAll('li');
  for (let index = 1; index < selectedItem.length; index += 1) {
    if (selectedItem[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      selectedItem[index].parentNode.insertBefore(selectedItem[index], selectedItem[index - 1]);
    }
  }
}
upButton.addEventListener('click', moveUp);

function moveDown() {
  const selectedItem = document.querySelectorAll('li');
  for (let index = 0; index < selectedItem.length; index += 1) {
    if (selectedItem[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      selectedItem[index].parentNode.insertBefore(selectedItem[index + 1], selectedItem[index]);
    }
  }
}
downButton.addEventListener('click', moveDown);

// Desafio 14
const removeButton = document.createElement('button');
removeButton.id = 'remover-selecionado';
removeButton.innerText = 'Remover';
main.appendChild(removeButton);

removeButton.addEventListener('click', () => {
  const selectedColor = document.querySelectorAll('li');
  for (let index = 0; index < selectedColor.length; index += 1) {
    if (selectedColor[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      selectedColor[index].remove();
    }
  }
});

// Criar botoes para mover elementos da lista pra baixo e pra cima:

// const a = document.getElementById('lista-tarefas');
// const b = a.childNodes;

// a.addEventListener('click', (event) => { // clique pra definir linha que será movida
//   for (let index = 0; index < b.length; index += 1) {
//     if (b[index].className === 'updown') {
//       b[index].className = '';
//     }
//   }
//   event.target.className = 'updown';
// }); //

// const upButton = document.createElement('button');
// upButton.innerText = 'up';
// upButton.id = 'upb';
// upButton.style.marginLeft = '5%';
// main.appendChild(upButton);

// const downButton = document.createElement('button');
// downButton.innerText = 'down';
// downButton.id = 'downb';
// downButton.style.marginLeft = '10px';
// main.appendChild(downButton);

// const upLink = document.getElementById('upb'); // botao de subida
// const downLink = document.getElementById('downb'); // botao de descida

// function Up() {
//   upLink.addEventListener('click', () => { // acao botao subida
//     const selected = document.querySelector('.updown');
//     selected.parentNode.insertBefore(selected, selected.previousElementSibling);
//   });
// }Up();

// function Down() {
//   downLink.addEventListener('click', () => { // acao botao subida
//     const selected = document.querySelector('.updown');
//     selected.parentNode.insertBefore(selected.nextElementSibling, selected);
//   });
// }Down();
