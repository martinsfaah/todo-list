//  Adicionar item a lista
function addItem() {
  const bot = document.getElementById('criar-tarefa')
  const ol = document.getElementById('lista-tarefas')
  bot.addEventListener('click', (_) => {
    const input = document.getElementById('texto-tarefa')
    const li = document.createElement('li')
    li.innerHTML = input.value
    ol.appendChild(li)
    input.value = ''
  })
}
addItem()


//mudar cor
function changeColor() {
  const ol = document.getElementById('lista-tarefas')
  ol.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'rgb(128, 128, 128)'
  })
}
changeColor()