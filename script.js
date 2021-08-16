// Requisito 1 Criando o HEADER

function CreateHeader () {
  const setBody = document.getElementsByTagName('body')[0];
  const creatHeader = document.createElement('header')
  creatHeader.innerHTML = "Minha Lista de Tarefas";
  setBody.appendChild(creatHeader);
}
CreateHeader();


// Requisito 2  Adicionando paragrafo

function CreateP (){
  const setHeader = document.getElementsByTagName('header')[0];
  const creatTagP = document.createElement('p');
  creatTagP.id = "funcionamento"
  creatTagP.innerHTML = "Clique duas vezes em um item para marcá-lo como completo";
  setHeader.appendChild(creatTagP);
}
CreateP();

// Requisito 3 Criando o input

function CreateInput (){
  const setBody3 = document.getElementsByTagName('body')[0];
  const createSec = document.createElement('section');
  setBody3.appendChild(createSec);
  createSec.id ="input-section"
  const createInput = document.createElement('input');
  createInput.setAttribute('type', 'text');
  createInput.id = "texto-tarefa"
  createSec.appendChild(createInput);
}
CreateInput();


// Requisito 4 Criando Lista

function CreateLista() {
  const setBody4 = document.getElementsByTagName('body')[0];
  const createLista = document.createElement('ol');
  createLista.id = "lista-tarefas"
  setBody4.appendChild(createLista);
}
CreateLista();

//Requisito 5 - 6 Criando Botão

function createButton(){
  const setSection = document.querySelector('#input-section')
  const button = document.createElement('button');
  button.id = "criar-tarefa";
  button.innerHTML = "Adicionar"
  setSection.appendChild(button);
}
createButton();

function addTask (){
  const setList = document.querySelector('ol');
  const creatLi = document.createElement('li')
  const targetInput = document.querySelector('input');
  setList.appendChild(creatLi)
  creatLi.innerText = targetInput.value;
  setList.appendChild(creatLi);
  targetInput.value = '';
}
const setButton = document.querySelector('#criar-tarefa')
setButton.addEventListener('click', addTask);
// setButton.addEventListener('keypress', addTask);

// Requisito 7 click muda o background

function paintLiGray (event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)'
}
const setList2 = document.querySelector('ol');
setList2.addEventListener('click', paintLiGray);

//Requisito 8 
