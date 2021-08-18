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
const pintalinha = document.getElementsByClassName('line');
/* criar constantes de uso comum fora da função facilita pois podem ser usadas entre funções */
function criaLi() {
  let criaLi = document.createElement('li');
  criaLi.className = 'line';
  criaLi.innerText = buscaTextoInput.value
  buscaTextoInput.value = '';
  buscalistaTarefas.appendChild(criaLi);
}
eventoBotao.addEventListener('click', criaLi)

/* function corLi(event) {//ta errado..tenho que criar uma classe dinamica
  for (let i = o; i < line.length; i += 1) {
    if (!line.style.backgroundColor === 'rgb(128, 128, 128') {
    } else {
      event.target.style.backgroundColor = 'rgb(128, 128, 128';
    }
  }
} */

function retornaCor(event) {
  let linha = event.target
  if (!linha.style.backgroundColor === 'rgb(128, 128, 128)')
    event.target.classList.add('select');
    linha.appendChild(linha)
} 

function riscaLi(dpclic) {
  let linha = dpclic.target
  linha.style.strike(); // duvida se strike esta sendo usado corretamente
}

function buscaLi() {
  for (let linha of pintaLinha) {
    linha.addEventListener('click', corLi)
    linha.addEventListener('click', retornaCor)
    linha.addEventListener('dbclick', riscaLi)
  }
}
