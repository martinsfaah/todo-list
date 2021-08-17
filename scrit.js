const input = document.getElementById('texto-tarefa');
const add = document.getElementById('criar-tarefa');
const List = document.getElementById('lista-tarefas');

function liColor(event) {
  if (document.querySelector('.selected')) {
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function linethrough(event) {
  const Target = event.target;
  if (Target.className.includes('completed')) {
    Target.classList.remove('completed');
  } else {
    Target.classList.add('completed');
  }
}

function addItens() {
  const Li = document.createElement('li');
  Li.innerHTML = input.value;
  Li.addEventListener('click', liColor);
  Li.addEventListener('dblclick', linethrough);
  input.value = '';
  List.appendChild(Li);

  document.getElementById('lista-tarefas').appendChild(Li);
}

add.addEventListener('click', addItens);
