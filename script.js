function createTask() {
    const buttonTask = document.getElementById("criar-tarefa")
    let input = document.getElementById("texto-tarefa")
    let olList = document.getElementById("lista-tarefas")
    buttonTask.addEventListener("click", function(){
        let createLi = document.createElement("li")
        createLi.innerText = input.value
        olList.appendChild(createLi) 
        input.value = ""
    })
}
createTask()

