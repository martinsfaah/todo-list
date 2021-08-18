//Requisitos 5, 6, 10 e 11
function createAndDeleteTasks () {
    const buttonCreate = document.getElementById("criar-tarefa");
    const input = document.getElementById("texto-tarefa");
    const fatherItem = document.getElementById("lista-tarefas");
    const buttonClean = document.getElementById("apaga-tudo")
    const buttonFinish = document.getElementById("remover-finalizados")

    buttonCreate.addEventListener("click", function (){
        let newItem = document.createElement("li");
        newItem.innerText = input.value;
        fatherItem.appendChild(newItem);
        input.value = "";
    })
    buttonClean.addEventListener("click", function(){
        while (fatherItem.hasChildNodes()) {  
            fatherItem.removeChild(fatherItem.firstChild);
          }
    })
    buttonFinish.addEventListener("click", function(){
        let itemList = document.querySelectorAll(".completed")
        for (let i = 0; i < itemList.length; i += 1) {
            if (itemList[i].className = "completed") {
                fatherItem.removeChild(itemList[i])
            }
        }
    })
}
createAndDeleteTasks()

//Requisitos 7 e 8 
function changeItemColor(color1, color2){

let taskFather = document.getElementById("lista-tarefas");

taskFather.addEventListener("click", function(event){
    if (event.target.style.backgroundColor !== color1){
        event.target.style.backgroundColor = color1
    } else {
        event.target.style.backgroundColor = color2 
    }
})
}

//Requisito 9
changeItemColor("rgb(128, 128, 128)", "white")

function riskItem (liClass) {
    let taskFather = document.getElementById("lista-tarefas")
    taskFather.addEventListener("dblclick", function(event){
         if (event.target.className !== liClass){
             event.target.className = liClass
         } else {
             event.target.className = ""
         }
    })
}

riskItem("completed")



