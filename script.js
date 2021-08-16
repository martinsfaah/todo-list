window.onload = function () {
  addTask();
}

//Criando função que  será alocada no botão "Adicionar Tarefa":
function addTask() {
  const addTaskBtn = document.getElementById('criar-tarefa');

  addTaskBtn.addEventListener('click', function () {
    const taskList  = document.getElementById('lista-tarefas');
    const inputValue = document.getElementById('texto-tarefa').value;
    const newLi = document.createElement('li');
    taskList.appendChild(newLi);
    const taskListLastElementChild  = taskList.lastElementChild;
    taskListLastElementChild.innerHTML = inputValue;
    document.getElementById('texto-tarefa').value = '';
  })
  }