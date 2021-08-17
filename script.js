const btnCriarTarefa = document.getElementById('criar-tarefa');
function criarTarefa() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const novaTarefa = document.createElement('li');
  const input = document.getElementById('texto-tarefa').value;
  listaTarefas.appendChild(novaTarefa).innerText = input;
  document.getElementById('texto-tarefa').value = '';
}
btnCriarTarefa.addEventListener('click', criarTarefa);
// Cria uma tarefa baseada no input

// Altera a cor de fundo ao clicar sobre uma tarefa e restringe a apenas uma seleção
function trocaCor() {
  const lista = document.querySelectorAll('li');
  for (let i = 0; i < lista.length; i += 1) {
    lista[i].style.backgroundColor = '';
  }
  this.style.backgroundColor = 'rgb(128, 128, 128)';
}

// Risca a tarefa após dois cliques
function tarefaConcluida() {
  if (this.className !== 'completed') {
    this.className = 'completed';
  } else this.classList.remove('completed');
}

// Atualiza a lista de tarefas após adicionar
function atualizaLista() {
  const lista = document.querySelectorAll('li');
  for (let i = 0; i < lista.length; i += 1) {
    lista[i].addEventListener('click', trocaCor);
    lista[i].addEventListener('dblclick', tarefaConcluida);
  }
}
btnCriarTarefa.addEventListener('click', atualizaLista);

// Apaga a lista de tarefas
const apagaTudo = document.querySelector('#apaga-tudo');
apagaTudo.addEventListener('click', () => {
  localStorage.clear();
  const listaOl = document.querySelector('#lista-tarefas');
  const elementos = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < elementos.length; i += 1) {
    listaOl.removeChild(elementos[i]);
  }
});

// Remove as tarefas finalizadas
const removerFinalizadas = document.querySelector('#remover-finalizados');
removerFinalizadas.addEventListener('click', () => {
  const listaFinalizadas = document.querySelectorAll('.completed');
  const listaOl = document.querySelector('#lista-tarefas');
  for (let i = 0; i < listaFinalizadas.length; i += 1) {
    listaOl.removeChild(listaFinalizadas[i]);
  }
});

// Salvar tarefas
const btnSalvar = document.querySelector('#salvar-tarefas');
btnSalvar.addEventListener('click', () => {
  let contador = 0;
  localStorage.clear();
  const lista = document.querySelectorAll('li');
  for (let i = 0; i < lista.length; i += 1) {
    contador += 1;
    localStorage.setItem('Contador', contador);
    localStorage.setItem('Tarefa ' + [i], lista[i].innerText);
    localStorage.setItem('Classe ' + [i], lista[i].className);
    localStorage.setItem('backgroundColor ' + [i], lista[i].style.backgroundColor);
  }
});
for (let i = 0; i < localStorage.getItem('Contador'); i += 1) {
  const criaElemento = document.createElement('li');
  const lista = document.getElementById('lista-tarefas');
  const adicionaElemento = lista.appendChild(criaElemento);
  adicionaElemento.innerText = localStorage.getItem('Tarefa ' + [i]);
  adicionaElemento.className = localStorage.getItem('Classe ' + [i]);
  adicionaElemento.style.backgroundColor = localStorage.getItem('backgroundColor ' + [i]);
  atualizaLista();
}
