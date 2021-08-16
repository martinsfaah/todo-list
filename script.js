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
const button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerText = 'Adicionar';
main.appendChild(button);

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
button.addEventListener('click', addListItem);

// Desafio 6 check

// Desafio 7
const taskListTarget = document.getElementById('lista-tarefas');

function paintLine(event) {
  reset();
  event.target.style.background = 'rgb(128, 128, 128';
}

taskListTarget.addEventListener('click', paintLine);

function reset() {
  const liTarget = document.querySelectorAll('li');
  for (let index = 0; index < liTarget.length; index += 1) {
    document.querySelectorAll('li')[index].style.backgroundColor = '';
  }
}
