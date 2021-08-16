const input = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');


button.addEventListener('click', () =>{
  const li = document.createElement('li');
  li.innerHTML = input.value; 
  ol.appendChild(li);
  input.value = '';
});