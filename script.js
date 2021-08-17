const inputText = document.getElementById("texto-tarefa");
const tasksList = document.getElementById("lista-tarefas");
const buttonAdd = document.getElementById("criar-tarefa");

function includingTasks(){
    const task = document.createElement("li");
    task.innerHTML = inputText.value;

    tasksList.appendChild(task);
    inputText.value = "";
}
buttonAdd.addEventListener("click", includingTasks);