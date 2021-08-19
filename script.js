let btnAdicionar = document.getElementById('criar-tarefa');
let lista = document.getElementById('lista-tarefas');

btnAdicionar.addEventListener('click', adicionaTarefa) 

function adicionaTarefa() {
  let tarefa = document.getElementById("texto-tarefa").value;
  let tarefaNova = document.createElement('li');
  tarefaNova.innerHTML = tarefa;

  lista.appendChild(tarefaNova);

  tarefaNova.addEventListener('click', setBackgroundGray);
  tarefaNova.addEventListener('dblclick', riskLi);

  document.getElementById('texto-tarefa').value = '';
};

// Adiciona cor de fundo em apenas um elemento da lista
// Recebi suporte do Matheus Monteiro e do Diego Brito
function setBackgroundGray(evento) {
  let classLi = document.querySelector('.backgroundGray');
  
  if (classLi) {
    classLi.classList.remove('backgroundGray');
  }
  
  evento.target.classList.add('backgroundGray');
}

// Adiciona ou remove risco nos elementos da lista
function riskLi(evento) {
  let lineRisk = evento.target.classList;
  if (lineRisk.contains('completed')) {
    evento.target.classList.remove('completed');
  } else {
    evento.target.classList.add('completed');
  }
}