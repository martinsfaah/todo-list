let botao = document.getElementById("criar-tarefa")
let inputT = document.getElementById("texto-tarefa")
let lista = document.getElementById("lista-tarefas")
let apaga = document.getElementById('apaga-tudo')
let feito = document.getElementsByClassName('completed')
let filhos = document.querySelectorAll('#lista-tarefas *')
botao.addEventListener('click', clicarButton)
function clicarButton () {
  let lista2 = document.createElement('li')
  console.log(lista2)
  lista2.innerText = inputT.value
  inputT.value = ""
  lista.appendChild(lista2)
}
lista.addEventListener ('click', clicarTexto)
function clicarTexto () {
  
  console.log(event.target)
}
lista.addEventListener ('dblclick', tarefaCompleta)
function tarefaCompleta (event) {
  event.target.className = "completed"
}
apaga.addEventListener ('click', apagarTudo)
function apagarTudo () {
  lista.innerText = ""
}