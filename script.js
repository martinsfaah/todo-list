window.onload = function() {
  let criaTarefa = document.getElementById("criar-tarefa");
  criaTarefa.addEventListener("click", function() {
    let entrada = document.getElementById("texto-tarefa");
    let novaTarefa = document.createElement("li");
    let lista = document.getElementById("lista-tarefas");
    novaTarefa.innerHTML = entrada.value;

    lista.appendChild(novaTarefa);

    entrada.value = "";
  })
}

