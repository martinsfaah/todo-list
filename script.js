function listatarefas() {
  const textoTarefa = document.querySelector('#texto-tarefa');
  const criarTarefa = document.querySelector('#criar-tarefa');
  const listaTarefas = document.querySelector('#lista-tarefas');

  criarTarefa.addEventListener('click', () => {
    const lista = document.createElement('li');
    listaTarefas.appendChild(lista);
    lista.innerHTML = textoTarefa.value;
    textoTarefa.value = '';
  });
}

listatarefas();
