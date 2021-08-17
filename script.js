let listItem = document.getElementsByClassName("list-item")

function listaTarefas () {
  let textoTarefa = document.querySelector("#texto-tarefa")
  let criarTarefa = document.querySelector("#criar-tarefa")
  let listaTarefas = document.querySelector("#lista-tarefas")
  
  criarTarefa.addEventListener("click", function() {
    let lista = document.createElement("li")
    lista.className = "list-item"
    listaTarefas.appendChild(lista)
    lista.innerHTML = textoTarefa.value
  // console.log(listaTarefas)
    textoTarefa.value = "";

    lista.addEventListener("click", colorTarefas)
})
}

function colorTarefas (event) {
  if (event.target.className != "selected") {
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].classList.remove("selected")
    }
    event.target.classList.add("selected")
  }
}

listaTarefas()

  // if (event.target.style.backgroundColor !== "rgb(128, 128, 128)") {
  //   for (index = 0; index < listItem.length; index += 1) { 
  //     listItem[index].style.backgroundColor = ""  
  //   }
  //   event.target.style.backgroundColor = "rgb(128, 128, 128)"
  //   }