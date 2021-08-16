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

// Requisito 5: adiciona botao, add informacao na ol e limpa o input
function adicionaTexto() {
    let botaoAdiciona = document.querySelector('#criar-tarefa');
    let listaOl = document.querySelector('#lista-tarefas');

    botaoAdiciona.addEventListener('click', function eventoClick() {
        const itemLista = document.createElement('li');
        itemLista.innerText = document.getElementById('texto-tarefa').value;
        listaOl.appendChild(itemLista);
        document.getElementById('texto-tarefa').value = null;
    })
}
adicionaTexto();
