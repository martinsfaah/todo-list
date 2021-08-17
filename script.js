// Requisito 5:
let button = document.querySelector('#criar-tarefa');
let input = document.querySelector('#texto-tarefa');
let ol = document.querySelector('#lista-tarefas')


button.addEventListener('click', function() {
  let li = document.createElement('li');
  li.innerText = input.value;

  ol.appendChild(li)
  input.value = '';
})