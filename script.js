const adicionar = document.getElementById('criar-tarefa');
const text = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');

function inputText() {
  const li = document.createElement('li');
  li.innerText = text.value;
  list.appendChild(li);
  text.value = '';
}
adicionar.addEventListener('click', inputText);

function backPrint(event) {
  whiteLine()
  const evento = event.target
  evento.style.backgroundColor = 'rgb(128, 128, 128)'
}
list.addEventListener('click', backPrint);


function whiteLine() {
  const resetLine = document.querySelectorAll('li')
  for (let index = 0; index < resetLine.length; index += 1) {
   resetLine[index].style.backgroundColor = 'white'
  }
}
  
