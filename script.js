const ol = document.querySelector('ol');
const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
button.addEventListener('click', addListItem);
function addListItem() {
    let newLi = document.createElement('li');
    newLi.innerText = input.value;
    ol.appendChild(newLi);
    input.value = '';
    let li = document.getElementsByTagName('li');
for(let index of li) {
    index.addEventListener('click', addGreyColor);
    index.addEventListener('dblclick', lineThrough);
}
}

function addGreyColor(event) {
    let li = document.getElementsByTagName('li');
    for(const index of li) {
        index.style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function lineThrough(event) {
    if(event.target.className === 'completed') {
        event.target.classList.remove('completed');
    } else {
    event.target.classList.add('completed');
}
}

const eraseButton = document.getElementById('apaga-tudo');
eraseButton.addEventListener('click', eraseTaskList);
function eraseTaskList() {
    ol.innerText = '';
}

const eraseDoneTasks = document.getElementById('remover-finalizados');
eraseDoneTasks.addEventListener('click', eraseOnlyDones);
function eraseOnlyDones() {
    let completed = document.querySelectorAll('.completed');
    for(const element of completed) {
        element.remove();
        }
    }

