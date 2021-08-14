//  Carregar
function initialState() {
  if(localStorage !== undefined) {
    let valores = Object.values(localStorage)
    valores.sort()
    const ol = document.getElementById('lista-tarefas')
    valores.forEach(e => {
      let arr = e.split('--')
      let li = document.createElement('li')
      li.innerHTML = arr[2]
      li.className = arr[1]
      ol.appendChild(li)
    })
  }
}
initialState()


//  Adicionar item a lista
function addItem() {
  const bot = document.getElementById('criar-tarefa')
  const ol = document.getElementById('lista-tarefas')
  bot.addEventListener('click', (_) => {
    const input = document.getElementById('texto-tarefa')
    const li = document.createElement('li')
    li.innerHTML = input.value
    li.className = 'list-values'
    ol.appendChild(li)
    input.value = ''
  })
}
addItem()


//  selecionar
function selecionar() {
  const ol = document.getElementById('lista-tarefas')
  ol.addEventListener('click', (e) => {
    const li = document.getElementsByClassName('list-values')
    for (let item of li) {
      if(item.className.split(' ').includes('selected')) {
        item.className = 'list-values'
      }
    }
    if(e.target.className.split(' ').includes('completed') === false){
      e.target.className += ' selected'
    }
  })
}
selecionar()

//  marcar item
function marcar() {
  const ol = document.getElementById('lista-tarefas')
  ol.addEventListener('dblclick', (e) => {
    if(e.target.className.split(' ').includes('completed')){
      e.target.className = 'list-values'
    }else {
      e.target.className = 'list-values completed'
    }
  })
}
marcar()

//  botão apagar tudo
function clear() {
  const bot = document.getElementById('apaga-tudo')
  const ol = document.getElementById('lista-tarefas')
  bot.addEventListener('click', (_) => {
    localStorage.clear()
    ol.innerHTML = ''
  })
}
clear()

//  botão remover finalizados
function removeFinish() {
  const bot = document.getElementById('remover-finalizados')
  const ol = document.getElementById('lista-tarefas')
  bot.addEventListener('click', (_) => {
    let items = document.getElementsByClassName('list-values')
    let excluir = []
    for(let c = 0; c < items.length; c += 1) {
      if(items[c].className.split(' ').includes('completed')) {
        excluir.push(items[c])
      }
    }
    excluir.forEach(e => ol.removeChild(e))
  })
}
removeFinish()

//  salvar
function save() {
  localStorage.clear()
  const itens = document.getElementsByClassName('list-values')
  for(let c = 0; c < itens.length; c += 1) {
    localStorage[c] = `${c + 1}--${itens[c].className}--${itens[c].innerHTML}`
  }
}

// mover o selecionado
function moveTheSelected() {
  const up = document.getElementById('mover-cima')
  const down = document.getElementById('mover-baixo')
  up.addEventListener('click',(_) => {
    const ol = document.getElementById('lista-tarefas')
    let itens = document.getElementsByClassName('list-values')
    let arr = []
    for(let c = 0; c < itens.length; c += 1) {
      arr.push(itens[c])
    }
    if(arr.findIndex(e => e.className.split(' ').includes('selected')) === -1) {
      return ''
    }
    let index = arr.findIndex(e => e.className.split(' ').includes('selected'))
    if(arr[index - 1] !== undefined) {
      let prev = arr[index - 1]
      arr[index - 1] = arr[index]
      arr[index] = prev
    }
    arr.forEach(e => ol.appendChild(e))
  })
  down.addEventListener('click',(_) => {
    let itens = document.getElementsByClassName('list-values')
    const ol = document.getElementById('lista-tarefas')
    let arr = []
    for(let c = 0; c < itens.length; c += 1) {
      arr.push(itens[c])
    }
    if(arr.findIndex(e => e.className.split(' ').includes('selected')) === -1) {
      return ''
    }
    let index = arr.findIndex(e => e.className.split(' ').includes('selected'))
    if(arr[index + 1] !== undefined) {
      let prox = arr[index + 1]
      arr[index + 1] = arr[index]
      arr[index] = prox
    }
    arr.forEach(e => ol.appendChild(e))
    
    
  })
}
moveTheSelected()

//remover selecionado
function removeSelect() {
  const bot = document.getElementById('remover-selecionado')
  const ol = document.getElementById('lista-tarefas')
  bot.addEventListener('click', (_) => {
    ol.removeChild(document.querySelector('.selected'))
  })
}
removeSelect()