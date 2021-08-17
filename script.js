//Criando uma Lista Ordenada de Tarefas:
let buttonCriarTarefa = document.getElementById("criar-tarefa");
let listaOrdenadaTarefas = document.getElementById("lista-tarefas");
let input = document.getElementById("texto-tarefa");
let body = document.getElementsByTagName("body");
let listaTarefas = document.querySelectorAll(".itemLista");
let buttonApagaTudo = document.getElementById("apaga-tudo");
let buttonApagaFinalizados = document.getElementById("remover-finalizados");

buttonCriarTarefa.addEventListener("click",adicionarTarefa);
function adicionarTarefa() {
    let valueInput = input.value;
    let novaTarefa = document.createElement("li");
    novaTarefa.innerHTML = valueInput;
    novaTarefa.className = "itemLista";
    novaTarefa.addEventListener("click",pintaItem);
    novaTarefa.addEventListener("dblclick",riscaItem);
    listaOrdenadaTarefas.appendChild(novaTarefa);
    input.value = "";
}

//Mudando o backgroundColor das Tarefas:
function pintaItem(evento) {
  let tarefas = Array.from(listaOrdenadaTarefas.children);
  for (let index = 0; index < tarefas.length; index += 1) {
    let atualTarefa = tarefas[index];
    if (atualTarefa.classList.contains("selected")) {
      atualTarefa.classList.remove("selected");
    }
    evento.target.classList.add("selected");
  }
};

function riscaItem(evento) {
  if (evento.target.classList.contains("completed")) {
    evento.target.classList.remove("completed");
  }
  else {
    evento.target.classList.add("completed");
  }
};

//Botão Apaga Tudo:
buttonApagaTudo.addEventListener("click",function(evento) {
  listaOrdenadaTarefas.innerHTML = "";
});

//Botão Apaga Finalizados:
buttonApagaFinalizados.addEventListener("click",function(evento) {
  let arrayCompleted = Array.from(listaOrdenadaTarefas.children);
  for (let index = 0; index < arrayCompleted.length; index += 1) {
    let itemAtual = arrayCompleted[index];
    if (itemAtual.classList.contains("completed")) {
      listaOrdenadaTarefas.removeChild(itemAtual);
    }
  }
});

// function addSelected(element) {
//   // força recálculo de taskList (agora, com itens adicionados)
//   const tasks = Array.from(listaOrdenadaTarefas.children);
//   for (let counter = 0; counter < tasks.length; counter += 1) {
//     const currentTask = tasks[counter];
//     if (currentTask.classList.contains('selected')) {
//       currentTask.classList.remove('selected');
//     }
//   }
//   element.classList.add("selected");
// }

