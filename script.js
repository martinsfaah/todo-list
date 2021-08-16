window.onload = function init() {
}

const setTask = document.getElementById("criar-tarefa");
setTask.addEventListener("click", form);

function form() {
  const input = document.getElementById("texto-tarefa");
  let task = input.value;
   
  document.getElementById("lista-tarefas").innerHTML += "<li id='item'>" + task + "</li>";
  input.value = '';
  
  const changeColor = document.getElementById("lista-tarefas");

  for(let index = 0;index < changeColor.children.length; index +=1 ){
  changeColor.children[index].addEventListener("click", change);
  }
}

function change(event){
  const changeColor = document.getElementById("lista-tarefas");
  for (let index = 0 ;index < changeColor.children.length ; index +=1){
    
    changeColor.children[index].style.backgroundColor= "white";

  }

event.target.style.backgroundColor = " rgb(128, 128, 128)"

}
