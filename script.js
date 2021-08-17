let button = document.querySelector("#criar-tarefa");
let listaOrdenadaTarefas = document.querySelector("#lista-tarefas");
let input = document.querySelector("#texto-tarefa");

button.addEventListener("click",adicionarTarefa);
function adicionarTarefa() {
    let valueInput = input.value;
    let novaTarefa = document.createElement("li");
    novaTarefa.innerHTML = valueInput;
    listaOrdenadaTarefas.appendChild(novaTarefa);
    input.value = "";
}

