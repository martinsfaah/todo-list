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

/* 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)] */

  let ol = document.querySelector("#lista-tarefas");
 
     ol.addEventListener('click', function(event) {  
    event.target.style.backgroundColor = "rgb(128,128,128)"
  })

  /* [8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo] */

  func