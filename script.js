function insertHeader() {
    let getBody = document.querySelector('body');
    let titulo = document.createElement('header');
    titulo.innerText = 'Minha Lista de Tarefas';
    titulo.innerHTML;
    getBody.appendChild(titulo);
}
insertHeader();

function insertP() {
    let getBody = document.querySelector('body');
    let paragrafo = document.createElement('p');
    paragrafo.id = ('funcionamento');
    paragrafo.innerText = ('Clique duas vezes em um item para marcá-lo como completo');
    paragrafo.innerHTML;
    getBody.appendChild(paragrafo);
}
insertP();

function insertInput() {
    let body = document.querySelector('body');
    let input = document.createElement('input');
    input.id = ('texto-tarefa');
    input.innerHTML;
    body.appendChild(input);
}
insertInput();

function addOl() {
    let getBody = document.querySelector('body');
    let ol = document.createElement('ol');
    ol.id = ('lista-tarefas');
    ol.innerHTML;
    getBody.appendChild(ol);
}
addOl();