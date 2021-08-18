let btnAdicionar = document.getElementById('criar-tarefa');
let lista = document.getElementById('lista-tarefas');

btnAdicionar.addEventListener('click', () => {
  let tarefa = document.getElementById("texto-tarefa").value;
  let tarefaNova = document.createElement('li');
  tarefaNova.innerHTML = document.getElementById("texto-tarefa").value;

  lista.appendChild(tarefaNova);

  document.getElementById('texto-tarefa').value=''
})