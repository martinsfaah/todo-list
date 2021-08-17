const input = document.getElementById('texto-tarefa');
const add = document.getElementById('criar-tarefa');
const List = document.getElementById('lista-tarefas');

function liColor(event) {
  if (document.querySelector('.selected')) {
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function addItens() {
  const Li = document.createElement('li');
  Li.innerHTML = input.value;
  Li.className = 'listItem';
  Li.addEventListener('click', liColor);
  input.value = '';
  List.appendChild(Li);

  document.getElementById('lista-tarefas').appendChild(Li);
}

add.addEventListener('click', addItens);
