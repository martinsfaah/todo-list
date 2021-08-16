function createTask() {
  const button = document.getElementById('criar-tarefa');
  const textInput = document.getElementById('texto-tarefa');
  const taskList = document.getElementById('lista-tarefas');
  button.addEventListener('click', () => {
    if (textInput.value !== '') {
      const task = document.createElement('li');
      task.innerHTML = textInput.value;
      taskList.append(task);
      textInput.value = '';
    } else {
      alert('Campo "Tarefa" não preenchido!');
    }
  });
}

createTask();
