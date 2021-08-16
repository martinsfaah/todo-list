let btnCriarTarefa = document.getElementById('criar-tarefa');
btnCriarTarefa.addEventListener('click', criarTarefa);
let newTarefaText = document.getElementById('texto-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');


function criarTarefa() {
  let textoTarefa = newTarefaText.value
  if (textoTarefa) {
    let liTarefasList = document.createElement('li'); //lista tarefas
    liTarefasList.innerText = textoTarefa;
    listaTarefas.appendChild(liTarefasList);
    console.log(newTarefaText);
    newTarefaText.value = "";
  }
  else {
    alert('Não é possível acrescentar tarefas em branco');
  }
}


