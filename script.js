function tarefaLista() {
  const botão = document.querySelector('#criar-tarefa');
  const criaLi = document.querySelector('#lista-tarefas');
  const getInput = document.querySelector('#texto-tarefa');
  function adicionaTarefa() {
    const lista = document.createElement('li');
    criaLi.appendChild(lista);
    lista.innerText = getInput.value;
    getInput.value = '';
  }
  botão.addEventListener('click', adicionaTarefa);
}
tarefaLista();
