//  constants declaration
const btnAddToList = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

//  Functions
function addToList() {
  const inputValue = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');
  const li = document.createElement('li');

  if (!inputValue) { // se o valor for falso o alert eh ativado e sai da funcao.
    alert('Valor invalido!');
    return;
  }

  li.textContent = inputValue.value;
  list.appendChild(li);
  inputValue.value = '';
}

function selectListElement(event) {
  event.target.classList.toggle('selected');
}

//  events
btnAddToList.addEventListener('click', addToList);
list.addEventListener('click', selectListElement)