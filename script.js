window.onload = function init(){


}

let setTask = document.getElementById("criar-tarefa");
setTask.addEventListener("click", form);

function form(event){
  
  let input = document.getElementById("texto-tarefa");
  let task = input.value;
   
  document.getElementById("lista-tarefas").innerHTML += "<li>"+ task +"</li>";
  input.value = '';
}