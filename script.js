function clickToDo() {
  const btnText = document.querySelector('#criar-tarefa');
  const text = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');
  const item = document.createElement('li');
  
  btnText.addEventListener('click', function() {
    if (text !== "") {
      item.innerHTML = text;
      list.append(item);
    }
  });
}
clickToDo();
