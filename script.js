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
function criaTarefa(classe, texto) {
  if (texto) {
    const novoElementoLista = document.createElement('li');
    novoElementoLista.innerText = texto;
    novoElementoLista.addEventListener('click', selecionaTarefa);
    novoElementoLista.addEventListener('dblclick', completaTarefa);
    if (classe) novoElementoLista.className = classe;
    document.querySelector('#lista-tarefas').appendChild(novoElementoLista);
    document.querySelector('#texto-tarefa').value = '';
  }
}

// Função do botão para poder colocar parâmetros na função de criar tarefa
function botaoCriar() {
  criaTarefa('', document.querySelector('#texto-tarefa').value);
}

// Função para apagar lista de tarefas
function apagaTudo() {
  if (window.confirm('Você está apagando todos os itens da sua lista, deseja continuar?')) {
    const lista = document.getElementsByTagName('li');
    while (lista[0]) lista[0].parentNode.removeChild(lista[0]);
  }
}

// Função para remover tarefas finalizadas
function removeFinalizados() {
  const completos = document.getElementsByClassName('completed');
  while (completos[0]) completos[0].parentNode.removeChild(completos[0]);
}

// Função para remover tarefas finalizadas
function salvaTarefas() {
  const tarefas = document.getElementsByTagName('li');
  const classesTarefa = [];
  const textosTarefa = [];
  for (let i = 0; i < tarefas.length; i += 1) {
    classesTarefa.push(tarefas[i].className);
    textosTarefa.push(tarefas[i].innerText);
  }
  localStorage.setItem('classes', classesTarefa);
  localStorage.setItem('textos', textosTarefa);
}

// Chama as tarefas salvas e coloca elas na lista quando a página é iniciada
if (localStorage.getItem('classes')) {
  const classeTarefas = localStorage.getItem('classes').split(',');
  const textoTarefas = localStorage.getItem('textos').split(',');
  for (let i = 0; i < classeTarefas.length; i += 1) {
    criaTarefa(classeTarefas[i], textoTarefas[i]);
  }
}

// Função para mover tarefas acima
function moveAcima() {
  const tarefaSelecionada = document.querySelector('.selected');
  if (tarefaSelecionada && tarefaSelecionada.previousSibling) {
    tarefaSelecionada.parentNode.insertBefore(tarefaSelecionada, tarefaSelecionada.previousSibling);
  }
}

//função para mover tarefas abaixo
function moveAbaixo() {
  const tarefaSelecionada = document.querySelector('.selected');
  const proximaTarefa = tarefaSelecionada.nextSibling;
  if (tarefaSelecionada && proximaTarefa) {
    tarefaSelecionada.parentNode.insertBefore(tarefaSelecionada, proximaTarefa.nextSibling);
  }
}

//função para remover tarefas
function removeSelecionado() {
  const tarefa = document.querySelector('.selected');
  if (tarefa) tarefa.remove();
}

// Criando os eventos para os elementos criados no html
document.querySelector('#criar-tarefa').onclick = botaoCriar;
document.querySelector('#apaga-tudo').onclick = apagaTudo;
document.querySelector('#remover-finalizados').onclick = removeFinalizados;
document.querySelector('#salvar-tarefas').onclick = salvaTarefas;
document.querySelector('#mover-cima').onclick = moveAcima;
document.querySelector('#mover-baixo').onclick = moveAbaixo;
document.querySelector('#remover-selecionado').onclick = removeSelecionado;
