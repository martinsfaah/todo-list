function botaoCriaTarefa() {
  let buscaTextoTarefa = document.querySelector('#lista-tarefas');
  let criaTarefa = document.createElement('button');
  criaTarefa.id = 'criar-tarefa';
  criaTarefa.innerHTML = 'Criar Tarefa'
  buscaTextoTarefa.appendChild(criaTarefa);
}
botaoCriaTarefa()

const buscalistaTarefas = document.getElementById("lista-tarefas");
const buscaTextoInput = document.getElementById('texto-tarefa')
const eventoBotao = document.querySelector('#criar-tarefa'); 
/* criar constantes de uso comum fora da função facilita pois podem ser usadas entre funções */
function criaLi() {
  let criaLi = document.createElement('li');
  criaLi.innerText = buscaTextoInput.value
  buscaTextoInput.value = '';
  buscalistaTarefas.appendChild(criaLi);
}
criaLi()

eventoBotao.addEventListener('click', criaLi)
