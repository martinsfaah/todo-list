const input = document.getElementById('texto-tarefa');
const add = document.getElementById('criar-tarefa');

function addItens() {
  const Li = document.createElement('li');
  const List = document.getElementById('lista-tarefas');
  Li.innerHTML = input.value;
  input.value = '';
  List.appendChild(Li);

  document.getElementById('lista-tarefas').appendChild(Li);
}

add.addEventListener('click', addItens);
