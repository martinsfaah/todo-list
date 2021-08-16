// 1. Criar uma função que adicione uma tag header com o conteúdo 'Minha Lista de Tarefas'
function criaTag(nomeTag, nomeTagPai){
  // declara tag criada 
  const criaTag = document.createElement(nomeTag);
  criaTag.innerText = 'Minha Lista de Tarefas'
  const tagPai = document.querySelector(nomeTagPai);
  tagPai.appendChild(criaTag)
  console.log('primeiro requisito ok')
}
// chamamos a função com o nome da tag que vamos criar, e de quem essa tag será filha. Respectivamente.
criaTag('header', 'body');

