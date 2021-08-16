    function createItem (buttonItem){


    let newInput = document.querySelector("#texto-tarefa");  
    let buttonTask = document.querySelector("#criar-tarefa");
    let taskItens = document.querySelector("#lista-tarefas");


    buttonTask.addEventListener('click', function() {
    if(newInput.value.length > 0){

    let newLi = document.createElement("li");
    taskItens.appendChild(newLi);

    newLi.innerText = newInput.value; 
    newInput.value = "";

    } else {
    alert("Erro, digite alguma coisa.")

    }
  })    
  }
  createItem();

/*   newInput.addEventListener('keyup', function(event) {
    if (event.keyCode > 0 && newInput.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
 */
