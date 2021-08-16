function inputTxt() {
  const header = document.querySelector('header');
  const textBox = document.createElement('input');
  textBox.setAttribute('type', 'text');
  textBox.id = 'texto-tarefa';
  header.appendChild(textBox);
}
inputTxt();

function addTask() {
  let buttonAdd = document.querySelector('#criar-tarefa');
  let ol = document.querySelector('#lista-tarefas');

  buttonAdd.addEventListener('click', function eventeClick() {
    const itemList = document.createElement('li');
    itemList.innerText = document.getElementById('texto-tarefa').value;
    ol.appendChild(itemList);
    document.getElementById('texto-tarefa').value = null;
  });
}
addTask();
