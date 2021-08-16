window.onload = function() {
  let criaTarefa = document.getElementById("criar-tarefa");
  criaTarefa.addEventListener("click", function() {
    let entrada = document.getElementById("texto-tarefa");
    let novaTarefa = document.createElement("li");
    let lista = document.getElementById("lista-tarefas");
    novaTarefa.innerHTML = entrada.value;

    if (entrada.value != ""){
      lista.appendChild(novaTarefa);

      entrada.value = "";
    }

  })


  let itensLista = document.getElementsByTagName("li");

  for (let index = 0; index < itensLista.length; itensLista += 1) {
    itensLista[index].addEventListener("click", function(evento) {
      itensLista[index].style.backgroundColor = "red";
      evento.target.style.backgroundColor = "rgb(128, 128, 128";
      console.log(evento.target)

      if (itensLista[index].classList.contains("selected") == true) {
        itensLista[index].classList.remove("selected");
      }
      else {
        itensLista[index].classList.add("selected");
      }
    });
  }

  for (let index = 0; index < itensLista.length; index += 1) {
    itensLista[index].addEventListener("dblclick", function() {
      if (itensLista[index].classList.contains("completed") == true) {
        itensLista[index].classList.remove("completed");
      }
      else {
        itensLista[index].classList.add("completed");
      }
    });
  }



}

