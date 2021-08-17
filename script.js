window.onload = function(){

}

const listOfOrder = document.querySelector("#lista-tarefas")
const createOrder = document.querySelector("#criar-tarefa")
const inputButton = document.querySelector("#texto-tarefa")

function createListOrder() {
  const elementList = document.createElement("li");
  elementList.innerText = inputButton.value;
  inputButton.value = "";
  elementList.addEventListener("click", changeColorBackground);
  listOfOrder.appendChild(elementList);
}
createOrder.addEventListener("click", createListOrder);

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
