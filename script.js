// Adicona escutador para mudança de backgorund ao clicar
function selectTask(task) {
  task.addEventListener('click', (event) => {
    const taskElement = event.target;
    taskElement.style.background = 'rgb(128, 128, 128)';
  });
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
      selectTask(task);
      taskList.append(task);
      textInput.value = '';
    } else {
      alert('Campo "Tarefa" não preenchido!');
    }
  });
}
createTask();
