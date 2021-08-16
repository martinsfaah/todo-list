function createParagraph() {
  let paragraph = document.createElement('p');
  const myHeader = document.querySelector('header');
  myHeader.appendChild(paragraph);
  paragraph.id = 'funcionamento';
  paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
}
createParagraph();

function createInput() {
  let input = document.createElement('input');
  const mySection = document.querySelector('section');
  mySection.appendChild(input);
  input.id = "texto-tarefa";
}
createInput();

function createOrdList() {
  let ordList = document.createElement('ol');
  const olSection = document.getElementById('olSection');
  olSection.appendChild(ordList);
  ordList.id = "lista-tarefas";
}
createOrdList();

function createButton() {
  const button = document.createElement('button');
  const mySection = document.querySelector('section');
  mySection.appendChild(button);
  button.id = "criar-tarefa";
  button.innerHTML = 'Adicionar';
}
createButton();

function criaTarefa() {

  const button = document.getElementById("criar-tarefa"); 
  const input = document.getElementById("texto-tarefa");
  const ordList = document.getElementById("lista-tarefas");

  button.addEventListener('click', function(){
    let listItem = document.createElement('li'); 
    ordList.appendChild(listItem); 
    listItem.innerHTML = input.value;
    input.value = '';  
  });
}
criaTarefa(); 
 

  





  