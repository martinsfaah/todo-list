const inputText = document.getElementById("texto-tarefa");
const tasksList = document.getElementById("lista-tarefas");
const buttonAdd = document.getElementById("criar-tarefa");

function includingTasks(){
    const task = document.createElement("li");
    task.innerHTML = inputText.value;
    task.addEventListener("click", colorCheck);
    
    tasksList.appendChild(task);
    inputText.value = "";
}
buttonAdd.addEventListener("click", includingTasks);

function colorCheck(event){
    const clickedTask = event.target
    clickedTask.style.backgroundColor = "rgb(128,128,128)";
}
