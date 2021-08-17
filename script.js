let botao = document.getElementById("criar-tarefa")
let input = document.getElementById("texto-tarefa")
let lista = document.getElementById("lista-tarefas")
botao.addEventListener('click', clicarButton)
function clicarButton () {
  let lista2 = document.createElement('li')
  lista2.innerText = input.value
  input.value = ""
  lista.appendChild(lista2)
}
lista.addEventListener ('click', clicarTexto)
function clicarTexto () {
   let corLista = lista.style.backgroundColor = "rgb(128, 128, 128)"
}