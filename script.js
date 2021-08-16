const header = document.querySelector('header'); // Requisito 2 : cria subtitulo abaixo do titulo
const subtitulo = document.createElement('p');
subtitulo.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
subtitulo.id = 'funcionamento';
header.appendChild(subtitulo);

// Requisito 3 : cria uma caixa input para receber valor
const main = document.querySelector('main');
const caixaTexto = document.createElement('input');
caixaTexto.setAttribute('type', 'text');
caixaTexto.id = 'texto-tarefa';
main.appendChild(caixaTexto);

// Requisito 4 :adiciona uma lista ordenada

const lista = document.createElement('ol');
lista.id = 'lista-tarefas';
main.appendChild(lista);
