function createElements(){
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const p = document.createElement('p');
    const input = document.createElement('input');
    const ol = document.createElement('ol');
    header.innerText = 'Minha Lista de Tarefas';
    p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
    p.id = 'funcionamento';
    input.id = 'texto-tarefa';
    ol.id = 'lista-tarefas';

    body.appendChild(header);
    body.appendChild(p);
    body.appendChild(input);
    body.appendChild(ol);
}

createElements();
