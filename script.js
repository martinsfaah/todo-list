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
}
}
function addGreyColor(event) {
    let li = document.getElementsByTagName('li');
    for(const index of li) {
        index.style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}