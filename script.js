
let list = document.getElementById("lista-tarefas");
let botao = document.getElementById("criar-tarefa");

botao.addEventListener("click", adicionaTarefa);
function adicionaTarefa (){
    let textoDigitado = document.getElementById("texto-tarefa").value;       
    let makeItem = document.createElement("li");
    makeItem.className = "tarefa"; 
    //makeItem.classList.add("selected");   
    makeItem.innerText = textoDigitado;   
    console.log(makeItem);
    list.appendChild(makeItem);
    document.getElementById("texto-tarefa").value = "";
}
list.addEventListener("click" , adicionaBack);
function adicionaBack(event){
    event.target.style.backgroundColor = "rgb(128, 128, 128)";  
}
let botaoApaga = document.getElementById("apaga-tudo");
botaoApaga.addEventListener("click", apagarTarefa);
function apagarTarefa(event1){
    location.reload();
}
