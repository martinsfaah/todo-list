const olLista = document.getElementById('lista-tarefas');
const btnCriarItem = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
//add item da lista na tela e add classe
function addLista() {
  const valorItem = textoTarefa.value;
  const item = document.createElement('li');
  item.innerHTML = valorItem;
  olLista.appendChild(item);
  item.addEventListener('click', addCor);
  item.addEventListener('dblclick', addLinha);
  textoTarefa.value = '';
}

btnCriarItem.addEventListener('click', addLista);
//add cor em um item clicado na lista e remove a cor dos outros itens
function addCor(event) {
  let itens = document.getElementsByTagName('li');
  for (let i = 0; i < itens.length; i += 1){
    itens[i].style.backgroundColor = 'rgb(250, 245, 245)';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

//add e apaga linha do item li quando clicado
function addLinha(event) {
  if (event.target.className === ' ') {
    event.target.className = 'completed';
  } else {
    event.target.className = ' '
  }
}
//apaga toda a lista
function apagaTudo() {
  olLista.innerHTML = ' ';
}
const btnApagaTudo = document.getElementById('apaga-tudo');
btnApagaTudo.addEventListener('click', apagaTudo);
//remove item finalizado
const btnRemoverFinalizados = document.getElementById('remover-finalizados');


function removerFinalizados() {
  const finalizados = document.querySelectorAll('li');
  for (let i = 0; i < finalizados.length; i += 1){
    if (finalizados[i].className === 'completed') {
      finalizados[i].remove();
    }
  }
}

btnRemoverFinalizados.addEventListener('click', removerFinalizados);