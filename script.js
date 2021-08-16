// 1. Criar uma função que adicione uma tag header com o conteúdo 'Minha Lista de Tarefas'
function criaTagHeader(nomeTag, nomeTagPai){
  // declara tag criada 
  const criaTag = document.createElement(nomeTag);
  criaTag.innerText = 'Minha Lista de Tarefas';
  const tagPai = document.querySelector(nomeTagPai);
  tagPai.appendChild(criaTag);
  console.log('primeiro requisito ok')
}
// chamamos a função com o nome da tag que vamos criar, e de quem essa tag será filha. Respectivamente.
criaTagHeader('header', 'body');


// 2. Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"
function criaTagP(nomeTag, nomeTagPai){
  // declara tag criada 
  const criaTag = document.createElement(nomeTag);
  criaTag.id = 'funcionamento';
  criaTag.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  const tagPai = document.querySelector(nomeTagPai);
  tagPai.appendChild(criaTag);
  console.log('segundo requisito ok');
}
// chamamos a função com o nome da tag que vamos criar, e de quem essa tag será filha. Respectivamente.
criaTagP('p', 'body');


// 3. Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista.
function criaTagInput(nomeTag, nomeTagPai){
  // declara tag criada 
  const criaTag = document.createElement(nomeTag);
  criaTag.id = 'texto-tarefa';
  const tagPai = document.querySelector(nomeTagPai);
  tagPai.appendChild(criaTag);
  console.log('terceiro requisito ok');
}
// chamamos a função com o nome da tag que vamos criar, e de quem essa tag será filha. Respectivamente.
criaTagInput('input', 'body');


//4. Adicione uma lista ordenada de tarefas com o id="lista-tarefas"
function criaTagOl(nomeTag, nomeTagPai){
  // declara tag criada 
  const criaTag = document.createElement(nomeTag);
  criaTag.id = 'lista-tarefas';
  const tagPai = document.querySelector(nomeTagPai);
  tagPai.appendChild(criaTag);
  console.log('quarto requisito ok');
}
// chamamos a função com o nome da tag que vamos criar, e de quem essa tag será filha. Respectivamente.
criaTagOl('ol', 'body');


// Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.
function criaTagButton(nomeTag, nomeTagPai){
  // declara tag criada 
  const criaTag = document.createElement(nomeTag);
  criaTag.innerText = 'Criar Tarefa!';
  criaTag.id = 'criar-tarefa';
  const tagPai = document.querySelector(nomeTagPai);
  tagPai.appendChild(criaTag);
  console.log('quarto requisito ok');
}
// chamamos a função com o nome da tag que vamos criar, e de quem essa tag será filha. Respectivamente.
criaTagButton('button', 'body');
