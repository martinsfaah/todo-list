
let list = document.getElementById("lista-tarefas");
let botao = document.getElementById("criar-tarefa");

botao.addEventListener("click", adicionaTarefa);
function adicionaTarefa (){
    let textoDigitado = document.getElementById("texto-tarefa").value;       
    let makeItem = document.createElement("li");
    makeItem.innerText = textoDigitado;   
    console.log(makeItem);
    list.appendChild(makeItem);
    document.getElementById("texto-tarefa").value = "";
         
}
