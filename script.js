// Desafio 5
const buttonTask = document.getElementById("criar-tarefa");
const input = document.getElementById("texto-tarefa");
const olList = document.getElementById("lista-tarefas");

buttonTask.addEventListener("click", function(){
    let createLi = document.createElement("li")
    createLi.innerText = input.value
    olList.appendChild(createLi) 
    input.value = ""
})

//desafio 7 e 8
function removeColor() {
    let taskList = document.getElementsByTagName("li")
    for (let i = 0; i < taskList.length; i +=1) {
        taskList[i].style.backgroundColor = ""
    }
}
olList.addEventListener("click", function(event) {
    removeColor()
    event.target.style.backgroundColor = "rgb(128,128,128)"
})





