let botaoAdiciona = document.querySelector('#criar-tarefa');
const header = document.querySelector('header');
const caixaTexto = document.createElement('input');

// Requisito 2 : cria subtitulo abaixo do titulo
const subtitulo = document.createElement('p');
subtitulo.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
subtitulo.id = 'funcionamento';
header.appendChild(subtitulo);

// Requisito 3 : cria uma caixa input para receber valor
const main = document.querySelector('main');
caixaTexto.setAttribute('type', 'text');
caixaTexto.id = 'texto-tarefa';
main.appendChild(caixaTexto);

// Requisito 4 :adiciona uma lista ordenada
const lista = document.createElement('ol');
lista.id = 'lista-tarefas';
main.appendChild(lista);

// Requisito 5,6  e 7: adiciona botao, add informacao na ol e limpa o input
const listaOl = document.querySelector('#lista-tarefas');
function adicionaTexto() {
    botaoAdiciona.addEventListener('click', function eventoClick() {
        const itemLista = document.createElement('li');
        itemLista.innerText = document.getElementById('texto-tarefa').value;
        listaOl.appendChild(itemLista);
        document.getElementById('texto-tarefa').value = null;
    })
}
adicionaTexto();

// Requisito 8:
function selecionaTexto(texto) {
    const seleciona = document.querySelector('.selected');
    if (!seleciona) {
        texto.target.classList.add('selected');
    } else {
        seleciona.classList.remove('selected');
        texto.target.classList.add('selected');
    }
}
listaOl.addEventListener('click', selecionaTexto);
