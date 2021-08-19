let btnAdicionar = document.getElementById('criar-tarefa');
let lista = document.getElementById('lista-tarefas');

btnAdicionar.addEventListener('click', adicionaTarefa) 

function adicionaTarefa() {
  let tarefa = document.getElementById("texto-tarefa").value;
  let tarefaNova = document.createElement('li');
  tarefaNova.innerHTML = tarefa;

  lista.appendChild(tarefaNova);
  tarefaNova.addEventListener('click', setBackgroundGray)

  document.getElementById('texto-tarefa').value = '';
};

function setBackgroundGray(evento) {
  let classLi = document.querySelector('.backgroundGray');
  
  if (classLi) {
    classLi.classList.remove('backgroundGray');
  }
  
  evento.target.classList.add('backgroundGray');
};