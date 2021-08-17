const selectBody = document.querySelector('body');
const createMain = document.createElement('main');
createMain.className = 'borda';
selectBody.appendChild(createMain);

// Requisito 1 Criando o HEADER

function CreateHeader () {  
  const creatHeader = document.createElement('header');
  const createTitle = document.createElement('h1');
  createTitle.innerHTML = "Minha Lista de Tarefas"
  creatHeader.appendChild(createTitle);
  createMain.appendChild(creatHeader);
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
  const createSec = document.createElement('section');
  createMain.appendChild(createSec);
  createSec.id ="input-section"
  const createInput = document.createElement('input');
  createInput.setAttribute('type', 'text');
  createInput.id = "texto-tarefa"
  createSec.appendChild(createInput);
}
CreateInput();


// Requisito 4 Criando Lista

function CreateLista() {
  const createLista = document.createElement('ol');
  createLista.id = "lista-tarefas"
  createMain.appendChild(createLista);
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
  removeColor();
  const backGrayColor = event.target
  backGrayColor.className = 'colorGray';
}

const setList2 = document.querySelector('ol');
setList2.addEventListener('click', paintLiGray);

//Requisito 8 RESETANDO O selecionado

const clickListItem = document.getElementsByTagName('li');
function removeColor() {
  for (let index = 0; index < clickListItem.length; index += 1) {
    clickListItem[index].classList.remove('colorGray')
  }
}

//Requisito 9 duplo clik para dar Check

function chekItenList (event){
  if (event.target.className !== 'completed') {
    event.target.className = 'completed';
  } else {
    event.className.className = 'completed';
  }
}
setList2.addEventListener('dblclick', chekItenList);

//Requisito 10 botão clear

