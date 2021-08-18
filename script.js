let campoEntrada = document.getElementById('texto-tarefa'); // Pegar entrada do usuario
let botaoTarefas = document.getElementById('criar-tarefa'); // Botão
let lista = document.getElementById('lista-tarefas'); // Lista

function criarTarefa() {
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = campoEntrada.value;
  lista.appendChild(novaTarefa);
  campoEntrada.value = '';
}
  
botaoTarefas.addEventListener('click', criarTarefa);

// Requisito 7


function mudarCor (event){
  let tagTarefa = document.querySelector(".liSelecionada");

  if (tagTarefa !== null){
    tagTarefa.classList.remove("liSelecionada");
  }
console.log(tagTarefa);
  event.target.classList.add("liSelecionada");
}

lista.addEventListener('click', mudarCor);
