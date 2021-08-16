let tarefas = null;
const botaoTarefa = document.getElementById('criar-tarefa');
const todoList = document.getElementById('lista-tarefas');
const apagaTudo = document.getElementById('apaga-tudo');
const todo = document.getElementsByClassName('todo');

function addLista() {
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  ol.appendChild(li);
  li.className = 'todo';
  todo[todo.length - 1].innerText = tarefas;
}

function armazenarTarefa() {
  const tarefa = document.getElementById('texto-tarefa');
  if (!tarefa.value) {
    console.log('valor invalido');
  } else {
    tarefas = tarefa.value;
    tarefa.value = '';
    addLista();
  }
}
botaoTarefa.addEventListener('click', armazenarTarefa);

function limpaBg() {
  const lista = document.querySelectorAll('li');
  for (let i = 0; i < lista.length; i += 1) {
    if (lista[i].classList.contains('selected')) {
      lista[i].classList.remove('selected');
    }
  }
}

function changeBg(clicado) {
  limpaBg();
  const alvo = clicado;
  alvo.target.classList.add('selected');
}

todoList.addEventListener('click', changeBg);

function completo(clicado) {
  const compl = clicado;
  if (compl.target.classList.contains('completed')) {
    compl.target.classList.remove('completed');
  } else {
    compl.target.classList.add('completed');
  }
}

todoList.addEventListener('dblclick', completo);

function deletaLista() {
  const itens = todoList.children;
  for (let i = 0; i < itens.length; i += 0) {
    todoList.removeChild(itens[0]);
  }
}
apagaTudo.addEventListener('click', deletaLista);
