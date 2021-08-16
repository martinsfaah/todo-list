window.onload = function(){
    let criaTarefa = document.getElementById("criar-tarefa");
    criaTarefa.addEventListener("click", function(){
        let entradaMensagem = document.getElementById("texto-tarefa");
        let novaMensagem = document.createElement("li");
        let itemLista = document.getElementById("lista-tarefas");
        novaMensagem.innerHTML = entradaMensagem.value;

        itemLista.appendChild(novaMensagem);

        entradaMensagem.value = "";
    })
}



