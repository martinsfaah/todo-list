//No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.

let input = document.getElementById('texto-tarefa');
let button = document.getElementById('criar-tarefa');
let ol = document.getElementById('lista-tarefas');


button.addEventListener('click',function(){
  let li = document.createElement('li')
  let task = input.value;
  li.innerText = task;
  ol.appendChild(li);
  input.value="";
 })

 //Será verificado que, ao se carregar a página, os itens da lista não tem o estilo CSS background-color: rgb(128, 128, 128). Será verificado que, ao se clicar em um item da lista, ele passa a ter o estilo CSS background-color: rgb(128, 128, 128)