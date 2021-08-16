function createHeader(){
    const body = document.querySelector('body');
    const header = document.createElement('header');
    header.innerText = 'Minha Lista de Tarefas';

    body.appendChild(header);
}

createHeader();
