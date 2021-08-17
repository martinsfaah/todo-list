const addBtn = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const ordList = document.getElementById('lista-tarefas');

addBtn.addEventListener('click', addNErase);
function addNErase() {
    const listItem = document.createElement('li');
    listItem.innerHTML = input.value;
    ordList.appendChild(listItem);
    input.value = '';
}