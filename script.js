// Adicona escutador para mudança de backgorund ao clicar
function selectTask(event) {
  const taskElement = event.target;
  const selectedTask = document.getElementsByClassName('tarefa selecionada')[0];
  if (taskElement !== selectedTask && selectedTask !== undefined) {
    selectedTask.style.backgroundColor = 'rgb(255, 255, 255)';
    selectedTask.classList.remove('selecionada');
  }
  taskElement.style.backgroundColor = 'rgb(128, 128, 128)';
  taskElement.classList.add('selecionada');
}

function completTask(event) {
  const elementTask = event.target;
  const classCompleted = elementTask.classList.contains('completed');
  if (!classCompleted) {
    elementTask.classList.add('completed');
  } else {
    elementTask.classList.remove('completed');
  }
}

// Função para incluir tarefas na lista
function createTask() {
  const button = document.getElementById('criar-tarefa');
  const textInput = document.getElementById('texto-tarefa');
  const taskList = document.getElementById('lista-tarefas');
  button.addEventListener('click', () => {
    if (textInput.value !== '') {
      const task = document.createElement('li');
      task.className = 'tarefa';
      task.innerHTML = textInput.value;
      task.addEventListener('click', selectTask);
      task.addEventListener('dblclick', completTask);
      taskList.append(task);
      textInput.value = '';
    } else {
      alert('Campo "Tarefa" não preenchido!');
    }
  });
}
createTask();

function deleteButton() {
  const button = document.getElementById('apaga-tudo');
  button.addEventListener('click', () => {
    const taskList = document.getElementById('lista-tarefas');
    console.log('ok');
    taskList.innerHTML = '';
  });
}

deleteButton();
