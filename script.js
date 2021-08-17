// CRIAÇÃO DA MECANICA DE ADD TAREFAS COM O BOTAO E INPUT

function criarTarefa() {
  const inputTarefa = document.getElementById('texto-tarefa');
  const listaTarefas = document.getElementById('lista-tarefas');
  const tarefa = document.createElement('li');
  tarefa.className = 'tarefa';
  tarefa.innerHTML = inputTarefa.value;
  listaTarefas.appendChild(tarefa);
  inputTarefa.value = '';

  // chama a função bgCinza logo depois de criar a tarefa, antes disso a tarefa não existe portanto se eu chamar depois, ela não vai funcionar, não tem como atribuir algo, a alguma coisa que não existe
  tarefa.addEventListener('click', bgCinza);
  tarefa.addEventListener('dblclick', riscado);
}
const btnAddTarefa = document.getElementById('criar-tarefa');
btnAddTarefa.addEventListener('click', criarTarefa);

function bgCinza(event) {
  const tarefa = document.getElementsByClassName('tarefa');

  for (let index = 0; index < tarefa.length; index += 1) {
    tarefa[index].classList.remove('bgCinza');
    event.target.classList.add('bgCinza');
  }
}

function riscado(event) {
  console.log(event.target.classList.toggle('completed'));
}

function limparLista() {
  const deletaLista = document.getElementById('lista-tarefas');

  while (deletaLista.lastChild) {
    deletaLista.removeChild(deletaLista.lastChild);
  }
}
const btnlimparLista = document.getElementById('apaga-tudo');
btnlimparLista.addEventListener('click', limparLista);

function limparCompletos() {
  const deletaCompletos = document.getElementsByClassName('completed');
  // console.log(deletaCompletos);
  // aqui preciso pedir para o while excluir o indice 0 pois, se eu pedir pra ele excluir os elementos que contém a classe completed, quando a lista estiver vazia, ela ainda existirá, e da erro de lista indefinida
  while (deletaCompletos[0]) {
    // console.log(deletaCompletos[0]);
    deletaCompletos[0].remove();
  }
  // condição para excluir apenas um elemento riscado por click
  // for (let index = 0; index < deletaCompletos.length; index += 1) {
  //   deletaCompletos[index].remove(deletaCompletos[index]);
  // }
}
const btnLimparCompletos = document.getElementById('remover-finalizados');
btnLimparCompletos.addEventListener('click', limparCompletos);

function salvarLista() {
  const listaTarefas = document.getElementById('lista-tarefas');
  localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas.innerHTML));
  console.log(listaTarefas.innerHTML);
}
const btnSalvarLista = document.getElementById('salvar-tarefas');
btnSalvarLista.addEventListener('click', salvarLista);

const exibir = JSON.parse(localStorage.getItem('listaTarefas'));
window.onload = exibir;

const listaTarefas = document.querySelector('#lista-tarefas');
listaTarefas.innerHTML = exibir;
