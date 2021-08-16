function tiraClass() {
  const selec = document.querySelectorAll('li');
  for (let index = 0; index < selec.length; index += 1) {
    if (selec[index].classList.contains('selected')) { selec[index].classList.remove('selected'); }
  }
}
function mudaCor(evento) {
  tiraClass();
  evento.target.classList.add('selected');
}
function adicionaTarefa() {
  const criaLi = document.querySelector('#lista-tarefas');
  const getInput = document.querySelector('#texto-tarefa');
  const lista = document.createElement('li');
  lista.addEventListener('click', mudaCor);
  criaLi.appendChild(lista);
  lista.innerText = getInput.value;
  getInput.value = '';
}
function tarefaLista() {
  const botão = document.querySelector('#criar-tarefa');
  botão.addEventListener('click', adicionaTarefa);
}
tarefaLista();

function risca() {
  const liste = document.querySelector('ol');
  liste.addEventListener('dblclick', (evento) => {
    evento.target.classList.toggle('completed');
  });
}
risca();
