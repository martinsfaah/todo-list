let btnAdicionar = document.getElementById('criar-tarefa');
let lista = document.getElementById('lista-tarefas');

btnAdicionar.addEventListener('click', () => {
  let tarefa = document.getElementById("texto-tarefa").value;
  let tarefaNova = document.createElement('li');
  tarefaNova.innerHTML = document.getElementById("texto-tarefa").value;
  tarefaNova.addEventListener('click', backgroundGray);

  lista.appendChild(tarefaNova);

  document.getElementById('texto-tarefa').value = '';
});

function backgroundGray(Event) {
  Event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}