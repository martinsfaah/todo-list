const input = document.createElement('input');
const body = document.querySelector('#body');
input.id = 'texto-tarefa';
body.appendChild(input);

const list = document.createElement('ol');
list.id = 'lista-tarefas';
body.appendChild(list);
