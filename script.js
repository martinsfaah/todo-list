const main = document.querySelector('body');
let ol = document.getElementById('lista-tarefas');
let btn = document.createElement('BUTTON');



// Cria Header
function createHeader () {
  const header = document.createElement('header');
  header.innerText = "Minha Lista de Tarefas";
  main.appendChild(header);
}

createHeader();

// Cria Small Text
function createSmallText () {
  const smallText = document.createElement('div');
  smallText. innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  smallText.id = 'funcionamento';
  main.appendChild(smallText);
}

createSmallText();

// Cria Input Box
function createInputBox () {
  const inputBox = document.createElement('input');
  inputBox.id = 'texto-tarefa';
  main.appendChild(inputBox);
}

createInputBox();

//Cria Button
function createInputBtn() {
  btn.innerHTML = 'Add Task';
  btn.id = 'criar-tarefa';
  main.appendChild(btn);
  btn.addEventListener('click', createTaskList);
  }

createInputBtn();

//Cria OL - HTML
function createOL () {
  const ol = document.createElement('ol');
  ol.id = 'lista-tarefas';
  main.appendChild(ol);
}

createOL();

// Cria a lista
function createTaskList () {
  let inputText = document.getElementById('texto-tarefa');
  const li = document.createElement('li');
  li.addEventListener('click', targetLi);
  li.innerHTML = inputText.value;
  document.getElementById('lista-tarefas').appendChild(li);
  inputText.value = '';
}

function targetLi (event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)'
}


