const addBtn = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const ordList = document.getElementById('lista-tarefas');

function addNErase() {
  const listItem = document.createElement('li');
  listItem.innerHTML = input.value;
  ordList.appendChild(listItem);
  input.value = '';
}
addBtn.addEventListener('click', addNErase);

// console.log('epa nenem')
function paintItGray(event) {
  let listText = document.getElementsByTagName('li');
  for (let i = 0; i < listText.length; i += 1) {
  if (listText[i].style.backgroundColor = 'gray') {
      listText[i].style.backgroundColor = 'white';
      event.target.style.backgroundColor = 'gray';
  }
  }
}
ordList.addEventListener('click', paintItGray);