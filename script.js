// Função para mudar o fundo da tarefa selecionada
function selecionaTarefa(evento) {
  const ultimaTarefa = document.querySelector('.selected');
  if (ultimaTarefa !== null) ultimaTarefa.classList.remove('selected');
  evento.target.classList.add('selected');
}

// Função para riscar a tarefa completa
function completaTarefa(evento) {
  const tarefaCompleta = evento.target;
  if (tarefaCompleta.className.includes('completed')) {
    tarefaCompleta.classList.remove('completed');
  } else {
    tarefaCompleta.classList.add('completed');
  }
}

// Função para criar tarefas na lista
function criaTarefa() {
  if (document.querySelector('#texto-tarefa').value) {
    const tarefa = document.querySelector('#texto-tarefa');
    const novoElementoLista = document.createElement('li');
    novoElementoLista.innerText = tarefa.value;
    novoElementoLista.addEventListener('click', selecionaTarefa);
    novoElementoLista.addEventListener('dblclick', completaTarefa);
    document.querySelector('#lista-tarefas').appendChild(novoElementoLista);
    tarefa.value = '';
  }
}

// Função para apagar lista de tarefas
function apagaTudo() {
  if (window.confirm('Você está apagando todos os itens da sua lista, deseja continuar?')) {
    const lista = document.getElementsByTagName('li');
    while (lista[0]) lista[0].parentNode.removeChild(lista[0]);
  }
}

// Função para apagar lista de tarefas
function removeFinalizados() {
    const completos = document.getElementsByClassName('completed');
    while (completos[0]) completos[0].parentNode.removeChild(completos[0]);
}

// Criando os eventos para os elementos criados no html
document.querySelector('#criar-tarefa').onclick = criaTarefa;
document.querySelector('#apaga-tudo').onclick = apagaTudo;
document.querySelector('#remover-finalizados').onclick = removeFinalizados;
