let inputTasks = document.getElementById("texto-tarefa");
  let createTask = document.getElementById("criar-tarefa");
  let taskList = document.getElementById("lista-tarefas");
  let body = document.querySelector('body');
  
  createTask.addEventListener("click", adicionaTarefa);
  function adicionaTarefa (){
      let taskValue = inputTasks.value;
      let newTask = document.createElement("li");
      newTask.innerHTML = taskValue;
      taskList.appendChild(newTask);
      inputTasks.value = "";
  }
  function addSelected(element){
      let tasks = Array.from(taskList.children);
      for (let index = 0; index < tasks.length; index += 1){
          let actualTask = tasks[index];
          if(actualTask.classList.contains("selected")){
              actualTask.classList.remove("selected");
          }
      }
      element.classList.add("selected");
  }
  function checkItem(originEvent) {
    const element = originEvent.target;
    if (element.parentNode.id === 'lista-tarefas') {
      addSelected(element);
    }
  }
  body.addEventListener('click', checkItem);
  function markCompleted(element) {
    if (element.classList.contains('completed')) {
      element.classList.remove('completed');
    } else {
      element.classList.add('completed');
    }
  }
  function checkItem2(originEvent) {
    let element = originEvent.target;
    if (element.parentNode.id === "lista-tarefas") {
      markCompleted(element);
    }
  }
  body.addEventListener("dblclick", checkItem2);
  function apagaLista(){
     taskList.innerText = "";
  }
  document.getElementById("apaga-tudo").addEventListener("click", apagaLista);

  function removeFinalizados(){
    let arrayList = Array.from(taskList.children);
      for(let index = 0; index < arrayList.length; index += 1){
          if(arrayList[index].classList.contains("completed")){
              taskList.removeChild(arrayList[index]);
          }
      }
  }
  document.getElementById("remover-finalizados").addEventListener("click", removeFinalizados); 