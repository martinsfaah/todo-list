function createList () {
  const inputList = document.querySelector("#texto-tarefa")
  const buttonList = document.querySelector("#criar-tarefa")

  buttonList.addEventListener("click", function() {
    let list = document.createElement("li")
    list.innerHTML = inputList.value

    document.querySelector("#lista-tarefas").appendChild(list)

    inputList.value = ""

  })
}

function turnToGrey (str) {
  const greyItem = document.getElementById("lista-tarefas")

  greyItem.addEventListener("click", function(event) {
    event.target.style.backgroundColor = str
  })
}

createList()
turnToGrey("rgb(128, 128, 128)")