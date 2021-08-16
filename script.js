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
