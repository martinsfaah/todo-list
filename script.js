// Criando função que será alocada no botão "Adicionar Tarefa":
function addTask() {
  const addTaskBtn = document.getElementById('criar-tarefa');

addTaskBtn.addEventListener('click', function () {
  const taskList = document.getElementById('lista-tarefas');
  const inputValue = document.getElementById('texto-tarefa').value;
  const newLi = document.createElement('li');
  taskList.appendChild(newLi);
  const taskListLastElementChild = taskList.lastElementChild;
  taskListLastElementChild.innerHTML = inputValue;
  document.getElementById('texto-tarefa').value = '';
})
}

// Criando função que adicionará a classe "selected" quando determinado <li> for  clicado:
// Além disso, o fundo do elemento clicado mudará  de cor.
function selectLi() {
  const taskList = document.getElementById('lista-tarefas');

  taskList.addEventListener('click', function(event) {
    const taskListArray = document.querySelector('#lista-tarefas').children;
    for (let li of taskListArray) {
      li.classList.remove("selected");
      li.style.backgroundColor = "blueviolet";
      event.target.classList.add("selected");
      event.target.style.backgroundColor = "rgb(128, 128, 128)";
    }
  })
}

window.onload = function () {
  addTask();
  selectLi();
};
