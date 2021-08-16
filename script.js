const tarefas = [];
const botaoTarefa = document.getElementById('criar-tarefa');
const todoList = document.getElementById('lista-tarefas');

function addLista() {
  const tarefa = tarefas[tarefas.length - 1];
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  const todo = document.getElementsByClassName('todo');
  ol.appendChild(li);
  li.className = 'todo';
  todo[todo.length - 1].innerText = tarefa;
}

function armazenarTarefa() {
  const tarefa = document.getElementById('texto-tarefa');
  if (!tarefa.value) {
    console.log('valor invalido');
  } else {
    tarefas.push(tarefa.value);
    tarefa.value = '';
    console.log(tarefas);
    addLista();
  }
}
botaoTarefa.addEventListener('click', armazenarTarefa);

function limpaBg() {
  const lista = document.querySelectorAll('li');
  for (let i = 0; i < lista.length; i += 1) {
    lista[i].style.backgroundColor = '';
  }
}

function changeBg(clicado) {
  limpaBg();
  const alvo = clicado;
  alvo.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

todoList.addEventListener('click', changeBg);
