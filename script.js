const criarTarefaBTN = document.getElementById("criar-tarefa");
const inputTarefa = document.getElementById("texto-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");

function adicionarTarefa(){
const inputText = inputTarefa.value; //https://www.w3schools.com/jsref/prop_text_value.asp material consultado
const novaTarefa = document.createElement("li")
novaTarefa.innerHTML = inputText;
listaTarefas.appendChild(novaTarefa);
inputTarefa.value = "";
}

criarTarefaBTN.addEventListener("click", adicionarTarefa);