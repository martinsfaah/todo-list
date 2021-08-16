const tarefas = [];
const botaoTarefa = document.getElementById('criar-tarefa');

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
