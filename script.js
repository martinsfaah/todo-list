const header = document.createElement('header');
header.innerText = 'Minha Lista de Tarefas';
const body = document.getElementsByTagName('body')[0];
body.appendChild(header);

const paragraph = document.createElement('p');
paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo'
