const adicionar = document.getElementById('criar-tarefa');
const text = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');

function inputText() {
  const li = document.createElement('li');
  li.innerText = text.value;
  list.appendChild(li);
  text.value = '';
}

adicionar.addEventListener('click', inputText);

function backPrint(event) {
  const evento = (event.target.style.background = 'rgb(128, 128, 128)');
}

list.addEventListener('dblclick', backPrint);
