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
  const setBody2 = document.getElementsByTagName('body')[0];
  const creatTagP = document.createElement('p');
  creatTagP.id = "funcionamento"
  creatTagP.innerHTML = "Clique duas vezes em um item para marcá-lo como completo";
  setBody2.appendChild(creatTagP);
}
CreateP();

// Requisito 3 Criando o input

function CreateInput (){
  const setBody3 = document.getElementsByTagName('body')[0];
  const createInput = document.createElement('input');
  createInput.setAttribute('type', 'text');
  createInput.id = "texto-tarefa"
  setBody3.appendChild(createInput);
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
