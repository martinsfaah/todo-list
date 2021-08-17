const botao = document.querySelector('#criar-tarefa');
let input = document.querySelector('#texto-tarefa');
let lista = document.querySelector('#lista-tarefas');

botao.addEventListener('click', adiciona ) 

function adiciona (){
  let criacao = document.createElement('li');
  criacao.className = 'lista'
  lista.appendChild(criacao)
  criacao.innerText = input.value
  input.value = "";
  addEventListener('click', addColor)
}

function addColor(event){
  let item = document.querySelector('.selected');
  if (item){
    item.classList.remove('selected')
  }
  event.target.classList.add('selected')
}

