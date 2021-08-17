let input = document.getElementById('texto-tarefa');
let button = document.getElementById('criar-tarefa');
let orderedList = document.getElementById('lista-tarefas');

button.addEventListener('click', handleButtonClick);

function handleButtonClick(){
    let li = document.createElement('li');
    li.innerText = input.value;
    orderedList.appendChild(li);
    input.value = "";

}