
const listOfOrder = document.querySelector("#lista-tarefas")
const createOrder = document.querySelector("#criar-tarefa")
const inputButton = document.querySelector("#texto-tarefa")

 function createListOrder() {
  const elementList = document.createElement("li");
  elementList.innerText = inputButton.value;
  inputButton.value = "";
listOfOrder.appendChild(elementList);
}
createOrder.addEventListener("click", createListOrder);
/*
   pegar o que está no input e colocar dentro da lista ordenada. 
   é preciso criar uma "li" para colocar os itens da lista ordenada em sequência.
   colocar o que está dentro do input na "li". 
   apagar o que está dentro do input após o item ir para a lista. 

*/