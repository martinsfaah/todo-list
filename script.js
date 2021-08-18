// requisito 5

let botaoTarefa = document.getElementById('criar-tarefa');
let inputTarefa = document.getElementById('texto-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');

botaoTarefa.addEventListener('click', criaItem); // clicar no botão chama a função que adiciona o li à ol e limpa o campo de input de texto

function criaItem() {
  let itemLista = document.createElement('li'); // variável para criar uma <li>
  itemLista.innerHTML = inputTarefa.value; // coloca o valor do input dentro da li
  listaTarefas.appendChild(itemLista); // adiciona o li criado à ol
  inputTarefa.value = ''; // limpa campo de input
}

// requisito 10

let botaoApagar = document.getElementById('apaga-tudo');

botaoApagar.addEventListener('click', limpaLista); // clicar no botao de apagar chama a função que remove os li's (childs) da ol

function limpaLista() {
  let listaCompleta = listaTarefas.children.length; // variável que comporta a length da ol
  for (let index = 0; index < listaCompleta; index += 1) {
    // remove cada child (li) da ol através do for
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
}
