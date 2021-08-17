    const newInput = document.querySelector("#texto-tarefa");  
    const buttonTask = document.querySelector("#criar-tarefa");
    const taskItens = document.querySelector("#lista-tarefas");
    const liItem = document.getElementsByTagName("li");

    

    function mudarCor(event){
      for (let i = 0 ; i < liItem.length ; i += 1 ){        
          liItem[i].style.backgroundColor = "transparent";
        event.target.style.backgroundColor = "rgb(128,128,128)"        
      }
    }

    function creatLi() {
    if(newInput.value.length > 0){
    const newLi = document.createElement("li");
    taskItens.appendChild(newLi);
    newLi.addEventListener('click', mudarCor) 

    newLi.innerText = newInput.value; 
    newInput.value = "";
    } else {
    alert("Erro, digite alguma coisa.")
    }
    }        
    buttonTask.addEventListener('click', creatLi) 

  /* [8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo] */        
     
   /* 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item*/
  
   /* 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista] */
/* 
function createItem
   const resetListButton = document.createElement("button");
   resetListButton.innerText = "clear";
   resetListButton.id = "apaga-tudo";
   
 */