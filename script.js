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
  event.target.classList.toggle('completed');
}
