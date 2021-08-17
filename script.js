//constants declaration
const btnAddToList = document.getElementById('criar-tarefa');


//events
btnAddToList.addEventListener('click', addToList);


//Functions
function addToList() {
  let inputValue = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');
  const li = document.createElement('li');

  if (!inputValue) { // se o valor for falso o alert eh ativado e sai da funcao.
    alert('Valor invalido!');
    return
  }

  li.textContent = inputValue.value;
  list.appendChild(li);
  inputValue.value = '';
}
