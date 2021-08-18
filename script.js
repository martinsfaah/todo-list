const campoEntrada = document.getElementById('texto-tarefa'); // Pegar entrada do usuario
const botaoTarefas = document.getElementById('criar-tarefa'); // Botão
const lista = document.getElementById('lista-tarefas'); // Lista

function criarTarefa() {
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = campoEntrada.value;
  lista.appendChild(novaTarefa);
  campoEntrada.value = '';
}

botaoTarefas.addEventListener('click', criarTarefa);

// Requisito 7

function mudarCor(event) {
  const tagTarefa = document.querySelector('.liSelecionada');

  if (tagTarefa !== null) {
    tagTarefa.classList.remove('liSelecionada');
  }

  event.target.classList.add('liSelecionada');
}

lista.addEventListener('click', mudarCor);

// Requisito 9

function duploRisco(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

lista.addEventListener('dblclick', duploRisco);

// Requisito 10

const botaoApagaTudo = document.getElementById('apaga-tudo'); // Botão

botaoApagaTudo.addEventListener('click', () => {
  lista.innerHTML = '';
});

// Requisito 11

const botaoFinalizados = document.getElementById('remover-finalizados'); // Botão

botaoFinalizados.addEventListener('click', () => {
  const tarefasFinalizadas = document.getElementsByClassName('completed');
  if (tarefasFinalizadas.length !== 0) {
    for (let i = tarefasFinalizadas.length - 1; i >= 0; i -= 1) {
      tarefasFinalizadas[i].remove();
    }
  }
});


