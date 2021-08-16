function listaTarefas () {
  let textoTarefa = document.querySelector("#texto-tarefa")
  let criarTarefa = document.querySelector("#criar-tarefa")
  let listaTarefas = document.querySelector("#lista-tarefas")
 

  criarTarefa.addEventListener("click", function() {
    let lista = document.createElement("li")
    listaTarefas.appendChild(lista)
    lista.innerHTML = textoTarefa.value
  console.log(listaTarefas)
    textoTarefa.value = "";
  })
}

listaTarefas()
// input id="texto-tarefa" type="text">
//   <button id="criar-tarefa"></button>
//   <ol id="lista-tarefas"></ol>

