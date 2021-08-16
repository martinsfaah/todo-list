const botao = document.querySelector('#criar-tarefa');
let input = document.querySelector('#texto-tarefa');
let lista = document.querySelector('#lista-tarefas');

botao.addEventListener('click', adiciona ) 

function adiciona (){
  let criacao = document.createElement('li');
  lista.appendChild(criacao)
  criacao.innerText = input.value
  input.value = "";
}
  
  


//<input type="text" id="texto-tarefa">
//<ol id="lista-tarefas"></ol>
//<button id="criar-tarefa">criar tarefa</button>



//function (){
  //const texto = document.querySelector('texto-tarefa')
  //texto.appendChild('lista-tarefas')
//}
