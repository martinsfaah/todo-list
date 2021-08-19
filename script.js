//Adiciona tarefa e limpa input (requisitos 5 e 6)//
const input = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

buttonAdd.addEventListener('click', adicionar)

function adicionar () {
    let lista = document.createElement('li');
    lista.innerText = input.value
    list.appendChild(lista);
    input.value = ''
};

