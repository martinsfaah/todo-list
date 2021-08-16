const ulLista = document.getElementById('lista-tarefas');
const btnCriarItem = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
//add item da lista na tela
function addLista() {
  const valorItem = textoTarefa.value;
  const item = document.createElement('li');
  item.innerHTML = valorItem;
  ulLista.appendChild(item);
  textoTarefa.value = '';
}

btnCriarItem.addEventListener('click', addLista);
