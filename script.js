// 2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"

const funcionamento = document.querySelector("#funcionamento");

// 3 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista

const textoTarefa = document.querySelector("#texto-tarefa");

//4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"

const listaTarefas = document.querySelector('#lista-tarefas')

// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

const botaoCriarTarefa = document.querySelector('#criar-tarefa');


function criarTarefa(){

  let li = document.createElement("li");
    li.innerText = textoTarefa.value;
    li.backgroundColor = "white";
    li.addEventListener('click', alterarCor);

  listaTarefas.appendChild(li);
  textoTarefa.value = '';
}

// 6 - Ordene os itens da lista de tarefas por ordem de criação
//já ta indo por padrão?//


// 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)

function alterarCor(e) {
  let elementoClicado = e.target;
  elementoClicado.style.backgroundColor = "rgb(128,128,128)";
}

// 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo
