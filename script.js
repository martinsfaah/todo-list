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
    let itens = document.getElementsByClassName('list-values')
    for(let c = 0; c < itens.length; c += 1) {
      if (itens[c].className.split(' ').includes('selected')) {
        if(itens[c - 1] != undefined) {
          itens[c].className = 'list-values'
          itens[c - 1].className = 'list-values selected'
        }
      }
    }
  })
  down.addEventListener('click',(_) => {
    let itens = document.getElementsByClassName('list-values')
    for(let c = itens.length - 1; c >= 0; c -= 1) {
      if (itens[c].className.split(' ').includes('selected')) {
        if(itens[c + 1] != undefined) {
          itens[c].className = 'list-values'
          itens[c + 1].className = 'list-values selected'
        }
      }
    }
  })
}
moveTheSelected()