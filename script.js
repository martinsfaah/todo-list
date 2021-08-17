const buttonAdd = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');
const header = document.querySelector('header');
const textBox = document.createElement('input');

function inputTxt() {
  textBox.setAttribute('type', 'text');
  textBox.id = 'texto-tarefa';
  header.appendChild(textBox);
}
inputTxt();

function addTask() {
  buttonAdd.addEventListener('click', function eventeClick() {
    const itemList = document.createElement('li');
    itemList.innerText = document.getElementById('texto-tarefa').value;
    ol.appendChild(itemList);
    document.getElementById('texto-tarefa').value = null;
  });
}
addTask();

function selectedTask(task) {
  const selected = document.querySelector('.selected');
  if (!selected) {
    task.target.classList.add('selected');
  } else {
    selected.classList.remove('selected');
    task.target.classList.add('selected');
  }
}
ol.addEventListener('click', selectedTask);
