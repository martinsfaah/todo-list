const lista = document.getElementById('lista-tarefas');
const inputTarefa = document.getElementById('texto-tarefa');
const botaoCriar = document.getElementById('criar-tarefa');
const botaoApagar = document.getElementById('apaga-tudo');
const botaoFinalizados = document.getElementById('remover-finalizados');

function adicionarEventos(elemento, evento, funcao) {
  if (elemento.length > 0) {
    for (let index = 0; index < elemento.length; index += 1) {
      elemento[index].addEventListener(evento, funcao);
    }
  } else {
    elemento.addEventListener(evento, funcao);
  }
}

function fundoCinza(evento) {
  console.log(evento.target);
  if (document.querySelector('.selected')) {
    document.querySelector('.selected').classList.remove('selected');
  }
  evento.target.classList.add('selected');
}

function linhaRiscada(evento) {
  const alvo = evento.target;
  if (alvo.className.includes('completed')) {
    alvo.classList.remove('completed');
  } else {
    alvo.classList.add('completed');
  }
}

function criarElementosLista() {
  const elemento = document.createElement('li');
  elemento.innerText = inputTarefa.value;
  adicionarEventos(elemento, 'click', fundoCinza);
  adicionarEventos(elemento, 'dblclick', linhaRiscada);
  lista.appendChild(elemento);
  inputTarefa.value = '';
}

function apagarElementosLista() {
  let itens = lista.children;
  for(let index = 0; index < itens.length; index += 0) {
    lista.removeChild(itens[0]);
  }
}

function apagarElementosFinalizados() {
  let itens = document.getElementsByClassName('completed');
  for(let index = 0; index < itens.length; index += 0) {
    lista.removeChild(itens[0]);
  }
}

function carregarPagina() {
  adicionarEventos(botaoCriar, 'click', criarElementosLista);
  adicionarEventos(botaoApagar, 'click', apagarElementosLista);
  adicionarEventos(botaoFinalizados, 'click', apagarElementosFinalizados);
}

window.onload = carregarPagina;
