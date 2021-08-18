
const listOfOrder = document.querySelector("#lista-tarefas")
const inputButton = document.querySelector("#texto-tarefa")
const sectionButtonAll = document.getElementById("button-all")


function createListOrder() {
  const elementList = document.createElement("li");
  elementList.innerText = inputButton.value;
  inputButton.value = "";
  elementList.addEventListener("click", changeColorBackground);
  listOfOrder.appendChild(elementList);
}


function changeColorBackground(evento) {
  if( document.querySelector(".selected")){
    document.querySelector(".selected").classList.remove('selected')
  }
    evento.target.classList.add("selected")
}

function markAndUnmark(evento) {
 evento.target.classList.toggle ("completed")
}
listOfOrder.addEventListener("dblclick", markAndUnmark);

function createButtonAddOrder() {
  const buttonAddOrder = document.createElement("button");
  buttonAddOrder.id = "criar-tarefa"
  buttonAddOrder.innerText = "adicionar";
  sectionButtonAll.appendChild(buttonAddOrder);

  buttonAddOrder.addEventListener("click", createListOrder);
}
createButtonAddOrder();

function createButtonRemovefinishOrder() {
  const buttonFinishOrder = document.createElement("button");
  buttonFinishOrder.id = "remover-finalizados";
  buttonFinishOrder.innerText = "Remover finalizados";
  sectionButtonAll.appendChild(buttonFinishOrder);

  buttonFinishOrder.addEventListener("click");
}
createButtonRemovefinishOrder();

function createButtonClearAll(evento) {
  const buttonClearAll = document.createElement("button");
  buttonClearAll.id = "apaga-tudo"
  buttonClearAll.innerText = "Botão de apagar";
  sectionButtonAll.appendChild(buttonClearAll);
  
  buttonClearAll.addEventListener("click", clearList);
}
createButtonClearAll();



function clearList(){
  while (listOfOrder.lastChild) {
    listOfOrder.removeChild(listOfOrder.lastChild);
  }
}

// localButton
// buttonClearAll