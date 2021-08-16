// Requisito 1

function CreateHeader () {
  const setBody = document.getElementByTagName('body')[0];
  const creatHeader = document.createElement('header')
  creatHeader.innerHTML = "Minha Lista de Tarefas";
  setBody.appendChild(creatHeader);
}
CreateHeader();


// Requisito 2

