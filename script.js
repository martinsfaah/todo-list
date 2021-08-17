function listatarefas() {
  const textoTarefa = document.querySelector('#texto-tarefa');
  const criarTarefa = document.querySelector('#criar-tarefa');
  const listaTarefas = document.querySelector('#lista-tarefas');

  criarTarefa.addEventListener('click', () => {
    const lista = document.createElement('li');
    listaTarefas.appendChild(lista);
    lista.innerHTML = textoTarefa.value;
    textoTarefa.value = '';

    backTarefas();

  });
}

listatarefas();

function backTarefas() {
  let listaDeTarefas = document.querySelectorAll('li');

  for (let i = 0; i < listaDeTarefas.length; i += 1) {
  listaDeTarefas[i].addEventListener('click', function(event){
  for (let i = 0; i < listaDeTarefas.length; i += 1) {   
  listaDeTarefas[i].classList.remove('alterBack');
  event.target.classList.add('alterBack');
    }
  }) 
 }
}
  // listaDeTarefas[i].className = 'alterBack';



