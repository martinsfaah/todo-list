window.onload = function init() {
}

const setTask = document.getElementById("criar-tarefa");
setTask.addEventListener("click", form);

function form() {
  const input = document.getElementById("texto-tarefa");
  const task = input.value;
   
  document.getElementById("lista-tarefas").innerHTML += "<li id='item'>" + task + "</li>";
  input.value = '';
  
  const changes = document.getElementById("lista-tarefas");

  for(let index = 0;index < changes.children.length; index +=1 ){
  changes.children[index].addEventListener("click", change);
  changes.children[index].addEventListener("dblclick", sub)

  
  }
}

function change(event){
  const changeColor = document.getElementById("lista-tarefas");
  for (let index = 0 ;index < changeColor.children.length ; index +=1){
    
    changeColor.children[index].style.backgroundColor= "white";

  }

event.target.style.backgroundColor = " rgb(128, 128, 128)"

}

function sub(event){
   if (event.target.classList[0]==="completed"){
    event.target.classList.remove("completed");
  }else{
  event.target.classList.add("completed");
  }

}

let clearAll = document.getElementById("apaga-tudo");

clearAll.addEventListener("click",clear);

function clear() {
  const lista = document.getElementById("lista-tarefas");
  const size = lista.children.length;
  for(let index = size-1; index >= 0 ; index -= 1){
  
    lista.removeChild(lista.children[index]);
  }
}