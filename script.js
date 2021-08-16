// Definição de constante utilizada várias vezes, ao longo do código.
const taskList = document.getElementById('lista-tarefas');

// Criando função que será alocada no botão "Adicionar Tarefa":
function addTask() {
  const addTaskBtn = document.getElementById('criar-tarefa');

  addTaskBtn.addEventListener('click', function () {
    const inputValue = document.getElementById('texto-tarefa').value;
    const newLi = document.createElement('li');
    taskList.appendChild(newLi);
    const taskListLastElementChild = taskList.lastElementChild;
    taskListLastElementChild.innerHTML = inputValue;
    document.getElementById('texto-tarefa').value = '';
  });
}

// Criando função que adicionará a classe "selected" quando determinado <li> for  clicado:
// Além disso, o fundo do elemento clicado mudará  de cor.
function selectLi() {
  taskList.addEventListener('click', function (event) {
    const taskListArray = document.querySelector('#lista-tarefas').children;
    for (const li of taskListArray) {
      li.classList.remove('selected');
      li.style.backgroundColor = 'blueviolet';
      event.target.classList.add('selected');
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
}

// Clicar duas vezes em determinado <li> faz com que ele seja riscado.
// Deve ser possível desfazer essa ação clicando novamente duas vezes no item.
function tickUntickLi() {
  taskList.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed') === false) {
      event.target.classList.add('completed');
    } else {
      event.target.classList.remove('completed');
    }
  });
}

// Adicione um botão "remover-selecionado" que, quando clicado, remove o item selecionado:
function excludeSelected() {
  const deleteSelectedTaskBtn = document.getElementById('remover-selecionado');

  deleteSelectedTaskBtn.addEventListener ('click', function () {
    const taskListArray = document.querySelector('#lista-tarefas').children;

    for (let li of taskListArray) {
      if (li.classList.contains('selected') === true) {
        taskList.removeChild(li);
      }
    }
  });
}

/* Adicione um botão "salvar" que, quando clicado, salvará todos os itens da lista, mesmo se o website for fechado:
function saveTaskList() {
} */

// Adicione um botão "remover-finalizados" que, quando clicado, deve apagar todos os itens já finalizados:
function deleteAllConcludedTasks() {
  const deleteConcludedTasksBtn = document.getElementById('remover-finalizados');

  deleteConcludedTasksBtn.addEventListener('click', function () {
    const completedTasksArray = document.getElementsByClassName('completed');

    while (completedTasksArray.length > 0) {
      completedTasksArray[0].parentNode.removeChild(completedTasksArray[0]);
    }
  });
}

// Adicione um botão "apaga-tudo" que, quando clicado, deve apagar todos os itens da lista:
function deleteAllTasks() {
  const deleteAllTasksBtn = document.getElementById('apaga-tudo');

  deleteAllTasksBtn.addEventListener('click', function () {
    taskList.innerHTML = '';
  });
}

window.onload = function () {
  addTask();
  selectLi();
  tickUntickLi();
  excludeSelected();
  deleteAllConcludedTasks();
  deleteAllTasks();
};
