const lista = document.getElementById('lista-tarefas');
const entradaTexto = document.getElementById('texto-tarefa');
const botaoCriar = document.getElementById('criar-tarefa');

function criarTarefa() {
  botaoCriar.addEventListener('click', () => {
    const tarefa = document.createElement('li');
    lista.appendChild(tarefa);
    tarefa.innerHTML = entradaTexto.value;
    entradaTexto.value = '';
  });
}

criarTarefa();
