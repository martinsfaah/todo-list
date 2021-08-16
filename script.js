const ol = document.querySelector('ol');
const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
button.addEventListener('click', addListItem);
function addListItem() {
    let newLi = document.createElement('li');
    newLi.innerText = input.value;
    ol.appendChild(newLi);
    input.value = '';
}