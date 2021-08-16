const addTask = document.querySelector('#criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const textTask = document.querySelector('#texto-tarefa');
const limparLista = document.getElementById('apaga-tudo');
const removeFinal = document.getElementById('remover-finalizados');
const salvar = document.getElementById('salvar-tarefas');
const rmvSel = document.getElementById('remover-selecionado');

function carregaLista() {
  lista.innerHTML = localStorage.getItem('lista-tarefas');
}

window.onload = carregaLista;

// Adiciona nova tarefa
function novaTarefa() {
  const tarefa = document.createElement('li');
  tarefa.innerText = textTask.value;
  lista.appendChild(tarefa);
  textTask.value = '';
}

addTask.addEventListener('click', novaTarefa);

// Troca cor do fundo de um item
function tiraCor() {
  if (document.querySelector('li[style]') !== null) {
    document.querySelector('li[style]').removeAttribute('style');
  }
}

function trocaCor(evento) {
  tiraCor();
  const fundoTarefa = evento.target;
  fundoTarefa.style.backgroundColor = 'rgb(128,128,128)';
}

lista.addEventListener('click', trocaCor);

// Elementos Completos
function riscaCompletos(evento) {
  const elemento = evento.target;
  if (elemento.className === 'completed') {
    elemento.removeAttribute('class');
  } else {
    elemento.className = 'completed';
  }
}

lista.addEventListener('dblclick', riscaCompletos);

// Limpar lista
function limpaLista() {
  const itens = document.getElementsByTagName('li');
  if (itens.length !== 0) {
    for (let i = itens.length - 1; i >= 0; i -= 1) {
      const item = itens[i];
      item.remove();
    }
  }
}

limparLista.addEventListener('click', limpaLista);

// Remove finalizados
function rmvFinal() {
  const itensFin = document.getElementsByClassName('completed');
  if (itensFin.length !== 0) {
    for (let i = itensFin.length - 1; i >= 0; i -= 1) {
      const item = itensFin[i];
      item.remove();
    }
  }
}

removeFinal.addEventListener('click', rmvFinal);

// Salvar Lista localmente
function salvarLista() {
  localStorage.setItem('lista-tarefas', lista.innerHTML);
  alert('Lista de Tarefas salva.');
}

salvar.addEventListener('click', salvarLista);

// Remover item selecionado
function removeSel() {
  const selecionado = document.querySelector('li[style]');
  selecionado.remove();
}

rmvSel.addEventListener('click', removeSel);
