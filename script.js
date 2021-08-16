function createElements(){
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const p = document.createElement('p');
    header.innerText = 'Minha Lista de Tarefas';
    p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
    p.id = 'funcionamento';

    body.appendChild(header);
    body.appendChild(p);
}

createElements();

function createInput() {
    const body = document.querySelector('body');
    const input = document.createElement('input');
    input.id = 'texto-tarefa';

    body.appendChild(input);
}

createInput();