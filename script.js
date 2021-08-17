let campoEntrada = document.getElementById('texto-tarefa'); // Pegar entrada do usuario
let botaoTarefas = document.getElementById('criar-tarefa'); // Botão
let lista = document.getElementById('lista-tarefas'); // Lista

function criarTarefa() {
  const newTask = document.createElement('li');
  newTask.innerText = campoEntrada.value;
  lista.appendChild(newTask);
  campoEntrada.value = '';
}
  
botaoTarefas.addEventListener('click', criarTarefa);

// Requisito 7
let itemJaSelecionado = 'false';

function mudarCor (event){
  // console.log('Teste click');
  if(itemJaSelecionado === 'false'){
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  itemJaSelecionado = 'True';
  }
}

lista.addEventListener('click', mudarCor);
